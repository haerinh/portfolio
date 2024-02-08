import java.util.Hashtable;
import java.util.Vector;
import java.util.Scanner;
import java.io.File;
import java.io.IOException;
import java.util.LinkedList;

/**
 * Represents an object of type Movie.
 * A Movie object has a title, some Actors, and results for the twelve Bechdel tests.
 *
 * @author Hae Rin Hong, Alejandra Robayo, Nile Rankin-Watson
 * @version (9 Dec 2022, 11:44am)
 */
public class Movie implements Comparable<Movie>
{
    // instance variables
    private String title;
    private Hashtable<Actor, String> roles;
    private Vector<String> results;
    private LinkedList<String> actors;
    private int feministScore;

    /**
     * Constructor for movie class 
     * @param t title for this movie
     */
    public Movie(String t){
        // initialise instance variables
        this.title = t;
        roles = new Hashtable<Actor, String>(); 
        results = new Vector<String>();
        actors = new LinkedList<String>();
    }
    
    /**
     * Compares movies to one another
     * @return 1 if the feministScore() of movie is larger than the feministScore() of input movie, 
     *         -1 if the feministScore() this movie is smaller, 
     *         0 otherwise. 
     */
    public int compareTo(Movie m) {
        // if (this.hashCode() > m.hashCode()) return 1;
        //else if (this.hashCode() < m.hashCode()) return -1;
        // else return 0;
        if( this.feministScore() > m.feministScore() ) return 1;
        else if( this.feministScore() < m.feministScore() ) return -1;
        else {
            if(this.title.compareTo(m.getTitle()) < 0 ) return 1;
            else if (this.title.compareTo(m.getTitle()) > 0 ) return -1;
        }
        return 0;
    }

    /**
     * Retrieves title of movie
     * @return title of movie
     */
    public String getTitle(){
        return this.title;
    }

    /**
     * Reads the input file ("nextBechdel_castGender.txt"), and adds all its Actors to this movie.
     * 
     */
    public void addAllActors(String actorsFile){
        int counter = 0; 
        Hashtable<Actor, String> finalresults = new Hashtable<Actor, String>();
        try{
            Scanner fileScan= new Scanner (new File(actorsFile));
            while (fileScan.hasNext()){
                String next= fileScan.nextLine();
                if (counter == 0){
                    counter ++;
                    continue;
                }
                next = next.replaceAll("\"", "");
                String[] actArray = next.split(",");
                if (actArray[0].equals(title)){
                    finalresults.put(addOneActor(next),actArray[2]+ " " +actArray[3]+ " " +actArray[4]+"\n");
                    //addOneActor(next);
                }
            }
            fileScan.close();
        }
        catch(IOException ex){
            System.out.println(ex);
        }
        
        System.out.println(finalresults);
    }

    /**
     * Adds one actor to movie class
     * @param line string containing information on the actor
     * @return the actor that was just added
     */
    public Actor addOneActor(String line){ 
        line = line.replaceAll("\"", "");
        String[] actArray = line.split(",");

        Actor actor = new Actor(actArray[1],actArray[5]);
        roles.put(actor,actArray[3]);
        actors.add(String.valueOf(actor));
        return actor;
    }

    /**
     * Tests this movie object with the input one and determines whether they are equal.
     * 
     * @return true if both objects are movies and have the same title, 
     * false in any other case.
     */
    public boolean equals(Object other) {
        if (other instanceof Movie) {
            return this.title.equals(((Movie) other).title); // Need explicit (Movie) cast to use .title
        } else {
            return false;
        }
    }

    /**
     * Populates results vector
     * @param results String containing test results
     */
    public void setTestResults(String newResults){
        String[] resArray = newResults.split(",");
        for (int i = 0; i < resArray.length; i++){
            results.add(resArray[i]);
        }
    }    

    /**
     * Retrieves all test results for movie
     * @return the results vector for the movie
     */
    public Vector<String> getAllTestResults(){
        return this.results;
    }   

    /**
     * Retrieves all actors in a linked list
     * @return a linked list of strings containing the names of actors in the movie
     */
    public LinkedList<String> getActors(){
        return this.actors;
    }   

    /**
     * Retrieves the movie's actors in a hashtable
     * @return a hashtable containing the actors in the movie
     */
    public Hashtable<Actor, String> getAllActors(){
        return this.roles;
    }   

    /**
     * Returns the movie's feminist score
     * @return - a String representation of the movie information.  
     */
    public int feministScore(){
        int result = 0;

        for (int i = 0; i<results.size(); i++) {
            if (i == 0 || i == 1 || i == 3 || i == 4 || i == 6 || i == 9 || i == 12) {
                if( "0".equals(results.get(i)) ) {
                    result += 1;
                }
            }
        }
        result = result*100 /7;
        this.feministScore = result;
        return result;

    }

    /**
     * Returns a string representation of the movie
     * @return - a String representation of the movie information.  
     */
    public String toString(){
        String result = "Movie title: " + title;
        result += "\nNumber of actors: " + roles.size();
        return result;
    }
    
    /**
     * Retrieves feminist score for this movie
     * @return the feminist score for this movie
     */
    public int getFeministScore(){
        return this.feministScore;
    }

    /**
     * Main method for testing in movie class
     */
    public static void main(String[] args){
        System.out.println("*******NEW TESTING FOR MOVIE CLASS****** \n Creating movies tester (The Boss), tester2 (Zootopia), and tester3 (Zootopia)");
        Movie tester = new Movie("The Boss");
        Movie tester2= new Movie("Zootopia");
        Movie tester3= new Movie("Zootopia");
        System.out.println("Adding Ricky Dillon into tester " 
            +tester.addOneActor("'Trolls','Ricky Dillon','Aspen Heitz','Supporting','18','Male' "));
        System.out.println("Adding Liza Koshy into tester2 "
            +tester.addOneActor("'Boo! A Madea Halloween','Liza Koshy','Aday','Supporting','7','Female'"));
        System.out.println("Testing setTestResults with '0,0,1,1,0,1,0,1,1,1,1,1,1'");
        tester.setTestResults("0,0,1,1,0,1,0,1,1,1,1,1,1");
        System.out.println("Testing setTestResults with '0,0,1,1,0,1,1,1,1,1,1,1,1'");
        tester2.setTestResults("0,0,1,1,0,1,1,1,1,1,1,1,1");
        System.out.println("Retrieving the Test Results with getAllTestResults, received: "
            + tester.getAllTestResults());
        tester.addAllActors("./data/nextBechdel_castGender.txt");
        tester2.addAllActors("./data/nextBechdel_castGender.txt");
        System.out.println("Tester roles for 'The Boss'\n");
        System.out.println(tester.roles);
        System.out.println("Tester roles for 'Zootopia'\n");
        System.out.println(tester2.roles);
        System.out.println("Testing tester title, expecting The Boss, received \n" 
            + tester2.getTitle());
        System.out.println("Testing tester2 title, expecting Zootopia, received \n" 
            + tester2.getTitle());

        System.out.println("Testing equals on tester and tester2. Expected: false. Recieved:" + tester.equals(tester2));
        System.out.println("Testing equals on tester2 and tester3. Expected: true. Recieved:" + tester2.equals(tester3));
        System.out.println("Testing getActors on tester2. Expecting Octavia Spencer, Peter Mansbridge," +
            "Mark 'Rhino' Smith, etc.");
        System.out.println(tester2.getActors());

        System.out.println("Testing getAllActors on tester2. Expecting hashtable of (Octavia Spencer, Female, Supporting), (Peter Mansbridge,"
            + " Male, Supporting), etc.");
        System.out.println(tester2.getAllActors());

        System.out.println("Testing toStrings on tester. Expecting: 'Movie title: The Boss ,, Number of actors: 39' Recieved:");
        System.out.println(tester);
        System.out.println("Testing toStrings on tester2. Expecting: 'Movie title: Zootopia ,, Number of actors: 32' Recieved:");
        System.out.println(tester2);

        System.out.println("----------------------FEMINIST SCORE------------------");
        System.out.println("Now showing feminist score for Zootopia. \n" + tester2.feministScore() + "%");
        System.out.println("Now showing feminist score for The Boss. \n" + tester.feministScore() + "%");
        System.out.println(tester.results);
        System.out.println(tester2.results);

    }

}
