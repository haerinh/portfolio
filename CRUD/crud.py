# Author: Hae Rin Hong and Yannis Zhu
# Import necessary modules from Flask and other libraries

# Import the appropriate database interface module
import cs304dbi as dbi

# Constants
USER_ID = 9138


# Function to check if a movie with a specific tt exists
def check_exist(conn, tt):
    curs = dbi.dict_cursor(conn)
    curs.execute("SELECT * FROM movie WHERE tt = %s", [tt])
    movie = curs.fetchone()
    return movie


# Function to insert a new movie into the database
def insert_movie(conn, tt, title, release, USER_ID):
    curs = dbi.dict_cursor(conn)
    curs.execute(
        """INSERT INTO movie (tt, title, `release`, addedby) 
        VALUES (%s, %s, %s, %s);""",
        [tt, title, release, USER_ID],
    )
    conn.commit()


# Function to find incomplete movies (missing director or release date)
def incomplete_movie(conn):
    curs = dbi.dict_cursor(conn)
    curs.execute(
        """SELECT * FROM movie 
        WHERE movie.director IS NULL OR movie.release IS NULL"""
    )
    return curs.fetchall()


# Function to update a movie in the database
def update_movie(
    conn, tt, movie_tt, movie_title, movie_release, movie_addedby, movie_director
):
    curs = dbi.dict_cursor(conn)

    # Convert empty strings to None for nullable fields
    movie_title = movie_title or None
    movie_release = movie_release or None
    movie_director = movie_director or None

    curs.execute(
        """UPDATE movie SET tt = %s, title = %s, `release` = %s, 
        addedby = %s, director = %s WHERE tt = %s;""",
        [movie_tt, movie_title, movie_release, movie_addedby, movie_director, tt],
    )
    conn.commit()


# Function to delete a movie from the database
def delete_movie(conn, tt):
    curs = dbi.dict_cursor(conn)
    curs.execute("""DELETE FROM movie WHERE tt = %s;""", [tt])
    conn.commit()


if __name__ == "__main__":
    import os

    database = os.getlogin() + "_db"
    print("will connect to {}".format(database))
    dbi.conf(database)
    conn = dbi.connect()
