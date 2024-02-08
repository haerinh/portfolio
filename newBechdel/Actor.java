
/**
 * Represents an object of type Actor. An Actor has a name and a gender.
 *
 * @author Hae Rin Hong, Alejandra Robayo, Nile Rankin-Watson
 * @version (9 Dec 2022, 11:44am)
 */
public class Actor
{
    // instance variables
    private String name;
    private String gender;
    
    /**
     * Constructor for actor class 
     * @param g gender for this actor
     * @param n name for this actor
     */
    public Actor(String n, String g){
        // initialise instance variables
        name = n;
        gender = g;
    }
    
    /**
     * this method sets the gender of the actor 
     * @param g the gender we are setting to
     */
    public void setGender(String g){
        this.gender = g;
    }
    
    /**
     * this method sets the name of the actor 
     * @param n the name we are setting to
     */
    public void setName(String n){
        this.name = n;
    }
    
    /**
     * Retrieves the gender of the actor
     * @return String gender - gender of the actor 
     */
    public String getGender(){
        return gender;
    }
    
    /**
     * Retrieves the name of the actor
     * @return String name - name of the actor 
     */
    public String getName(){
        return name;
    }
    
    /**
     * Returns a string representation of the actor
     * @return - a String representation of the actor information.  
     */
    public String toString(){
        String result = name;
        result += " (" + gender +") ";
        return result;
    }

    /**
     * This method is defined here because Actor (mutable) is used as a key in a Hashtable.
     * It makes sure that same Actors have always the same hash code.
     * So, the hash code of any object that is used as key in a hash table,
     * has to be produced on an *immutable* quantity,
     * like a String (such a string is the name of the actor in our case)
     * 
     * @return an integer, which is the hash code for the name of the actor
     */
    public int hashCode() {
        return name.hashCode();
    }

    /**
     * Tests this actor against the input one and determines whether they are equal.
     * Two actors are considered equal if they have the same name and gender.
     * 
     * @return true if both objects are of type Actor, 
     * and have the same name and gender, false in any other case.
     */
    public boolean equals(Object other) {
        if (other instanceof Actor) {
            return this.name.equals(((Actor) other).name) && 
            this.gender.equals(((Actor) other).gender); // Need explicit (Actor) cast to use .name
        } else {
            return false;
        }
    }
    
    /**
     * Main method for testing
     */
    public static void main (String[] args){
        System.out.println("********NEW TESTING FOR ACTOR CLASS**********");
        System.out.println("Creating new actors tester1, tester2, tester3, tester4");
        Actor tester1 = new Actor("Patrice Lovely","Female");
        System.out.println(tester1);
        Actor tester2 = new Actor("Dylan Obrien","Male");
        System.out.println(tester2);
        Actor tester3 = new Actor("Tom Holland","Male");
        System.out.println(tester3);
        Actor tester4 = new Actor("Tom Holland","Male");
        System.out.println(tester4);
        
        System.out.println("Testing tester1");
        System.out.println("Testing getGender() --> expected Female");
        System.out.println(tester1.getGender());
        System.out.println("Testing getName() --> expected Patrice Lovely");
        System.out.println(tester1.getName());
        System.out.println("Testing toString() on tester 1 --> expected Actor Name: Patrice Lovely Gender: Female");
        System.out.println(tester1);
        System.out.println("Testing tester1.setGender('Male')");
        tester1.setGender("Male");
        System.out.println("Testing tester1.setName('Brad Pitt')");
        tester1.setName("Brad Pitt");
        System.out.println("Testing toString() on tester 1 --> expected Actor Name: Brad Pitt Gender: Male");
        System.out.println(tester1);
        
        System.out.println("Testing hashcode for tester1.");
        System.out.println(tester1.hashCode());
        
        System.out.println("Testing equals(tester2) on tester3. Expected: false. Recieved:");
        System.out.println(tester3.equals(tester2));
        
        System.out.println("Testing equals(tester4) on tester3. Expected: true. Recieved:");
        System.out.println(tester3.equals(tester4));
        
    }
}
