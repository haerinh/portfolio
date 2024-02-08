# Author: Hae Rin Hong and Yannis Zhu
# Import necessary modules from Flask and other libraries
from flask import (
    Flask,
    render_template,
    make_response,
    url_for,
    request,
    redirect,
    flash,
    session,
    send_from_directory,
    jsonify,
)
from werkzeug.utils import secure_filename

# import queries py file
import crud

# Create a Flask web application instance
app = Flask(__name__)

# Constants
USER_ID = 9138

# Generate a random secret key for session management

import cs304dbi as dbi

import random

app.secret_key = "".join(
    [
        random.choice(
            ("ABCDEFGHIJKLMNOPQRSTUVXYZ" + "abcdefghijklmnopqrstuvxyz" + "0123456789")
        )
        for i in range(20)
    ]
)

# Enable better error messages for certain common request errors
app.config["TRAP_BAD_REQUEST_ERRORS"] = True


# Define the main route for the index page
@app.route("/")
def index():
    return render_template("main.html", title="Hello")


# Define the route for updating a movie
@app.route("/update/<tt>", methods=["GET", "POST"])
def update(tt):
    # Connect to the database
    conn = dbi.connect()

    # Handle GET requests
    if request.method == "GET":
        # Check if the movie exists
        movie_exist = crud.check_exist(conn, tt)

        if movie_exist is not None:
            # Render the update form with the existing movie details
            return render_template(
                "update.html",
                method="POST",
                action=url_for("update", tt=tt),
                movie=movie_exist,
            )
        else:
            # Redirect to the index page with a flash message if the movie is not found
            flash("Movie not found.")
            return redirect(url_for("index"))

    # Handle POST requests
    elif request.method == "POST":
        # Get the value of the clicked button (update or delete)
        value = request.form.get("submit")
        movie_exist = crud.check_exist(conn, tt)

        # Update movie information if the "update" button is clicked
        if value == "update" and movie_exist is not None:
            new_movie_tt = request.form.get("movie-tt")

            # Check if the new tt is different from the current one
            if new_movie_tt != tt:
                new_movie_exist = crud.check_exist(conn, new_movie_tt)

                # Check if the new tt is available
                if new_movie_exist is not None:
                    flash("Movie already exists.")
                    return render_template(
                        "update.html",
                        method="POST",
                        action=url_for("update", tt=tt),
                        movie=new_movie_exist,
                    )

            # Update the movie with the new tt and other details
            movie_title = request.form.get("movie-title")
            movie_release = request.form.get("movie-release")
            movie_addedby = request.form.get("movie-addedby")
            movie_director = request.form.get("movie-director")

            crud.update_movie(
                conn,
                tt,
                new_movie_tt,
                movie_title,
                movie_release,
                movie_addedby,
                movie_director,
            )

            flash("Movie was updated successfully")

            # Redirect to the updated movie URL
            return redirect(url_for("update", tt=new_movie_tt))

        # Delete the movie if the "delete" button is clicked
        elif value == "delete" and movie_exist is not None:
            crud.delete_movie(conn, tt=tt)
            flash("Movie was deleted successfully")
            return redirect(url_for("index"))

    # If the request method is neither GET nor POST, or the movie doesn't exist in a POST request
    flash("Invalid request")
    return redirect(url_for("index"))


# Define the route for inserting a new movie
@app.route("/insert/", methods=["GET", "POST"])
def insert():
    # Connect to the database
    conn = dbi.connect()

    # Handle GET requests
    if request.method == "GET":
        return render_template("insert.html", method="POST")

    # Handle POST requests
    else:
        # Get movie information from the form
        movie_tt = request.form.get("movie-tt")
        movie_title = request.form.get("movie-title")
        movie_release = request.form.get("movie-release")

        # Flag to check for missing information
        flag = False

        # Check if movie id (tt) is missing
        if movie_tt == "":
            flash("Please enter movie id")
            flag = True

        # Check if movie title is missing
        if movie_title == "":
            flash("Please enter movie title")
            flag = True

        # Check if movie's release year is missing
        if movie_release == "":
            flash("Please enter the movie's release year")
            flag = True

        # If any information is missing, redirect to the insert form
        if flag == True:
            return redirect(url_for("insert"))

        # Check if the movie already exists in the database
        movie_exist = crud.check_exist(conn, tt=movie_tt)

        if type(movie_exist) == dict:
            # Redirect to the update page with a flash message if the movie is already in the database
            flash("Movie already in the database")
            return redirect(url_for("update", tt=movie_tt))
        else:
            # Insert the new movie into the database and redirect to the update page
            crud.insert_movie(conn, movie_tt, movie_title, movie_release, USER_ID)
            return redirect(url_for("update", tt=movie_tt))


# Define the route for selecting a movie
@app.route("/select/", methods=["GET", "POST"])
def select():
    # Connect to the database
    conn = dbi.connect()

    # Handle POST requests
    if request.method == "POST":
        selected_tt = request.form.get("menu-tt")
        return redirect(url_for("update", tt=selected_tt))

    # Get a list of incomplete movies from the database
    incomplete_movies = crud.incomplete_movie(conn)

    # Render the select.html template with the list of incomplete movies
    return render_template("select.html", incomplete_movies=incomplete_movies)


# Run the Flask application if the script is executed directly
if __name__ == "__main__":
    import sys, os

    # Get the port number from the command line arguments or use a default value
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
        assert port > 1024
    else:
        port = os.getuid()
    # Set local variable to personal db
    db_to_use = "hhong6_db"
    print("Will connect to {}".format(db_to_use))
    dbi.conf(db_to_use)
    app.debug = True
    app.run("0.0.0.0", port)
