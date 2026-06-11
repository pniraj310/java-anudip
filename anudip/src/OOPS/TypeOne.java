//Compile time polymorphism
package OOPS;

class Calculator1 {

    // Same name — different parameters
    int add(int a, int b) {
        System.out.println("Two integers");
        return a + b;
    }

    double add(double a, double b) {
        System.out.println("Two doubles");
        return a + b;
    }

    int add(int a, int b, int c) {
        System.out.println("Three integers");
        return a + b + c;
    }

    String add(String a, String b) {
        System.out.println("Two strings");
        return a + b;
    }
}

public class TypeOne {
    public static void main(String[] args) {

        Calculator1 c = new Calculator1();

        System.out.println(c.add(10, 20));
        // Two integers → 30

        System.out.println(c.add(1.5, 2.5));
        // Two doubles → 4.0

        System.out.println(c.add(10, 20, 30));
        // Three integers → 60

        System.out.println(c.add("Niraj", " Patel"));
        // Two strings → Niraj Patel
    }
}
