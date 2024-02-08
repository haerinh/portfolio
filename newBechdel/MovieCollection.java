import java.util.Hashtable;
import java.util.LinkedList;
import java.util.Scanner;
import java.io.File;
import java.io.IOException;
import java.util.Vector;
import java.util.Enumeration;
import javafoundations.PriorityQueue;

/**
 * Reads Movie data as well as alternateBechdel test results data to construct 
 * a collection of movies.
 *
 * @author Hae Rin Hong, Alejandra Robayo, Nile Rankin-Watson
 * @version (9 Dec 2022, 11:44am)
 */
public class MovieCollection
{
    // instance variables
    private LinkedList<Movie> allMovies;
    private LinkedList<Actor> allActors;

    /**
     * Constructor for objects of class MovieCollection
     */
    public MovieCollection()
    {
        // initialise instance variables
        allMovies = new LinkedList<Movie>();
        allActors = new LinkedList<Actor>();
    }

    /**
     * Reads the input file, and uses its first column (movie title) to create all movie objects.
     * 
     */
    public void readMovies(){
        int counter = 0;
        try{
            Scanner fileScan= new Scanner (new File("./data/nextBechdel_allTests.txt"));
            while (fileScan.hasNext()){
                String movieResults = fileScan.nextLine();
                if (counter == 0){
                    counter ++;
                    continue;
                }
                int index = movieResults.indexOf(",");
                String title = movieResults.substring(0,index);
                String results = movieResults.substring(index+1);
                Movie movie = new Movie(title);
                movie.setTestResults(results);
                allMovies.add(movie);
                counter++;
                //movie.addAllActors("./data/nextBechdel_castGender.txt");
            }
        }catch(IOException ex){
            System.out.println(ex);
        }
    }

    /**
     * Reads the casts for each movie, from input casts file
     */
    public void readCast(){
        for (int i = 0; i < allMovies.size(); i++) {
            Movie movie = allMovies.get(i);
            movie.addAllActors("./data/nextBechdel_castGender.txt");
            Hashtable<Actor, String> roles = movie.getAllActors();
            Enumeration<Actor> e = roles.keys();
            while (e.hasMoreElements()) {
                // Getting the key of a particular entry
                Actor actor = e.nextElement();
                allActors.add(actor);
            }
        }
    }

    /**
     * returns a PriorityQueue of movies in the provided data based on their feminist score. 
     * That is, if enqueued all the movies, movies will be dequeued in priority order,
     * from most feminist to least feminist. 
     * @return    returns a PriorityQueue of Movies in the provided data based on feminist score.
     */
    public PriorityQueue rankMovies(){
        PriorityQueue<Movie> movies = new PriorityQueue<Movie>();
        //int
        for (int i = 0; i< allMovies.size(); i++) {
            Movie m = allMovies.get(i);
            movies.enqueue(m);
        }

        for (int i = 0; i< allMovies.size(); i++) {
            Movie dequeuedm = (Movie) movies.dequeue();
            System.out.println(dequeuedm.getTitle());
            System.out.println(dequeuedm.getFeministScore());
        }

        return movies;
    }

    /**
     * Returns the names of all actors in the collection
     * @return    names of all actors in a linked list
     */
    public LinkedList<String> getActorNames(){
        LinkedList<String> actorNames = new LinkedList <String>();
        for (int i = 0; i < allActors.size(); i++) {
            Actor actor = allActors.get(i);
            actorNames.add(actor.getName());
        }
        return actorNames;
    }

    /**
     * Returns all the Actors in the collection
     * @return    all actors in a linked list
     */
    public LinkedList<Actor> getActors(){
        return this.allActors;
    }

    /**
     * Retrieves all movies in the collection
     * @return    Returns all the movies in a LinkedList
     */
    public LinkedList<Movie> getMovies() {
        return this.allMovies;
    }

    /**
     * Returns the titles of all movies in the collection
     * @return    Returns the titles of all movies in the collection in a linked list
     */
    public LinkedList<String> getMovieTitles(){
        LinkedList<String> titles = new LinkedList <String>();
        for (int i = 0; i < allMovies.size(); i++) {
            Movie movie = allMovies.get(i);
            titles.add(movie.getTitle());
        }
        return titles;
    }

    /**
     * Returns a list of all Movies that pass the n-th Bechdel test
     * @return    a list of all Movies that pass the n-th Bechdel test
     */
    public LinkedList<Movie> findAllMoviesPassedTestNum(int n){
        LinkedList<Movie> movies = new LinkedList<>();
        for (int i = 0; i < allMovies.size(); i++) {
            Movie movie = allMovies.get(i);
            Vector<String> results = movie.getAllTestResults();
            if( "0".equals(results.get(n)) ) movies.add(movie);
        }
        return movies;
    }

    /**
     * Creates a string representation of the collection
     * @return a string representation of the collection
     */
    public String toString() {
        String s = "This collection has " + allMovies.size() + " movies. They are: \n";
        s += allMovies;
        return s;
    }

    /**
     * Main method for testing
     */
    public static void main (String[] args){
        System.out.println("**********NOW TESTING MovieCollection********");
        System.out.println("Creating new movie collection 'movieCollection'");
        MovieCollection movieCollection = new MovieCollection();
        System.out.println("Now testing readMovies and readCast on movieCollection.");
        movieCollection.readMovies();
        movieCollection.readCast();

        System.out.println("Now printing allMovies and allActors for movieCollection.");
        System.out.println(movieCollection.allMovies + "\n All Actors: \n" + movieCollection.allActors);

        LinkedList<Movie> bechdelMovies = movieCollection.findAllMoviesPassedTestNum(0);

        System.out.println("Now testing getActorNames for movieCollection.");
        System.out.println(movieCollection.getActorNames());

        System.out.println("Now testing getActors for movieCollection.");
        System.out.println(movieCollection.getActors());

        System.out.println("Now testing getMovies for movieCollection.");
        System.out.println(movieCollection.getMovies());

        System.out.println("Now testing getMovieTitles for movieCollection.");
        System.out.println(movieCollection.getMovieTitles());

        System.out.println("Testing findAllMoviesPassedTestNum(3) for this movie collection. Expecting Alpha, Beta, Gamma. Recieved:");
        System.out.println(bechdelMovies);

        LinkedList<Movie> otherTestMovies2 = movieCollection.findAllMoviesPassedTestNum(3);

        System.out.println("Testing findAllMoviesPassedTestNum() for this movie collection. Expecting [] Recieved:");
        System.out.println(otherTestMovies2);

        System.out.println("\n \n \nNow finding all movies that passed the Bechdel Test. They are: \n" + bechdelMovies);

        System.out.println("\n \n \nNow finding all movies that passed either the Pierce or the Landau Test. They are:");
        LinkedList<Movie> peirceOrLandauMovies = new LinkedList<>();
        LinkedList<Movie> allMovies = movieCollection.getMovies();
        for (int i = 0; i < allMovies.size(); i++) {
            Movie movie = allMovies.get(i);
            Vector<String> results = movie.getAllTestResults();
            if( "0".equals(results.get(1)) || "0".equals(results.get(2)) ) {
                peirceOrLandauMovies.add(movie);
            }
        }
        System.out.println(peirceOrLandauMovies);

        System.out.println("\n \n \nNow finding all movies that passed the White Test but did not pass the Ress-Davies Test. They are:");
        LinkedList<Movie> whiteMovies = new LinkedList<>();
        for (int i = 0; i < allMovies.size(); i++) {
            Movie movie = allMovies.get(i);
            Vector<String> results = movie.getAllTestResults();
            if( "0".equals(results.get(11)) && "1".equals(results.get(12)) ) {
                whiteMovies.add(movie);
            }
        }
        System.out.println(whiteMovies);

        System.out.println("-----------------------------------------------------\nTesting toString for movieCollection.");
        //movieCollection.rankMovies();
        System.out.println(movieCollection);

        System.out.println("----------------------------------------------------- \nNow testing rankMovies() for movieCollection.");
        movieCollection.rankMovies();

    }
}
