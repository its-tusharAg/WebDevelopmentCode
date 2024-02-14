import java.util.LinkedList;

public class LinkedListFramework {

    public static void main(String[] args) {
        LinkedList<Integer> ll = new LinkedList<>();

        // add
        ll.addFirst(1);
        ll.addLast(2);
        ll.addLast(3);
        ll.addLast(4);
        ll.addLast(5);
        System.out.println(ll);
        
        // remove
        ll.removeLast();
        ll.removeFirst();
        System.out.println(ll);
    }

}
