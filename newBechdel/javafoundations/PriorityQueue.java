package javafoundations;
import javafoundations.exceptions.*;

/**
 * Implements queues using LinkedMaxHeaps, orders elements based on their natural ordering
 *
 * @author Hae Rin Hong, Alejandra Robayo, Nile Rankin-Watson
 * @version (9 Dec 2022, 11:44am)
 */
public class PriorityQueue<T extends Comparable<T>> implements Queue<T>
{
    // instance variables 
    private LinkedMaxHeap<T> heap;
    private int count;

    /**
     * Constructor for objects of class PriorityQueue
     */
    public PriorityQueue()
    {
        // initialise instance variables
        heap = new LinkedMaxHeap<T>();
        count=0;
    }

    /**
     * Adds an element to the queue
     *
     * @param element the element being added
     */
    public void enqueue (T element){
        heap.add(element);
        count++;
    }
    
    /**
     * Removes and returns largest element in the queue
     *
     * @return    the element being dequeued
     */
    public T dequeue(){
        if (heap.size() == 0){
            throw new EmptyCollectionException("failed. PriorityQueue is empty.");
        }
        T dequeuedElement = heap.removeMax();
        count--;
        return dequeuedElement;   
    }
    
    /**
     * Finds the biggest element in the queue
     *
     * @return    largest element in the heap
     */
    public T first(){
        if (heap.size() == 0){
            throw new EmptyCollectionException("failed. PriorityQueue is empty.");
        }
        T maxElement = heap.getMax();
        return maxElement;
    }
    
    /**
     * Determines if queue is empty
     *
     * @return    true if queue is empty, false otherwise
     */
    public boolean isEmpty(){
        return (size() == 0);
    }
    
    /**
     * Finds the size of the queue
     * @return    tsize of the queue
     */
    public int size(){
        return count;
    }
    
    /**
     * Creates a string representation of priority queue

     * @return    string representation of priorityQueue
     */
    public String toString(){
        String s = "This queue is " + size() + " elements long. \nElements: \n";
        PriorityQueue<T> temp2 = new PriorityQueue<T>();
        while (!this.isEmpty()) {
            T newTemp = this.dequeue();
            s += newTemp + "\n";
            temp2.enqueue(newTemp);
        }
        
        while (!temp2.isEmpty()) {
            T element = temp2.dequeue();
            this.enqueue(element);
        }
        return s;
    }
    
    /**
     * Main method for testing class
     */
    public static void main(String args[]){
        PriorityQueue pq = new PriorityQueue();
        pq.enqueue("test");
        pq.enqueue("test3");
        pq.enqueue("test1");
        
        System.out.println(pq);
    }
}
