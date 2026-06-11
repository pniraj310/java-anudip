package Stack;

import java.util.Stack;

public class StackDemo {

    public static void main(String[] args) {

        // Create Stack
        Stack<Integer> stack = new Stack<>();

        System.out.println("=== PUSH OPERATION ===");
        stack.push(10);
        System.out.println("Pushed: 10 → " + stack);
        stack.push(20);
        System.out.println("Pushed: 20 → " + stack);
        stack.push(30);
        System.out.println("Pushed: 30 → " + stack);
        stack.push(40);
        System.out.println("Pushed: 40 → " + stack);
        stack.push(50);
        System.out.println("Pushed: 50 → " + stack);

        System.out.println();
        System.out.println("=== PEEK OPERATION ===");
        System.out.println("Top element: " + stack.peek()); // 50

        System.out.println();
        System.out.println("=== POP OPERATION ===");
        System.out.println("Popped: " + stack.pop()); // 50
        System.out.println("Stack now: " + stack);
        System.out.println("Popped: " + stack.pop()); // 40
        System.out.println("Stack now: " + stack);

        System.out.println();
        System.out.println("=== SEARCH OPERATION ===");
        System.out.println("Search 20: " + stack.search(20)); // position from top
        System.out.println("Search 99: " + stack.search(99)); // -1 not found

        System.out.println();
        System.out.println("=== ISEMPTY OPERATION ===");
        System.out.println("Is empty: " + stack.isEmpty()); // false

        System.out.println();
        System.out.println("=== SIZE OPERATION ===");
        System.out.println("Size: " + stack.size()); // 3

        System.out.println();
        System.out.println("=== TRAVERSE STACK ===");
        for(int x : stack) {
            System.out.println("Element: " + x);
        }

        System.out.println();
        System.out.println("=== CLEAR STACK ===");
        stack.clear();
        System.out.println("After clear: " + stack);
        System.out.println("Is empty: " + stack.isEmpty()); // true
    }
}
