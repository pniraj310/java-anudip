package OOPS;

class Calculator2 {
    // a, b = parameters
    int add(int a, int b) {
        return a + b;
    }

    // name = parameter
    void greet(String name) {
        System.out.println("Hello " + name);
    }
}

public class ParameterArgs {

    public static void main(String[] args) {

        // Command line args
        System.out.println("Args count: " + args.length);

        for(int i = 0; i < args.length; i++) {
            System.out.println("args[" + i + "] = " + args[i]);
        }

        Calculator2 c = new Calculator2();

        // 10, 20 = arguments
        int result = c.add(10, 20);
        System.out.println("Sum: " + result);

        // "Niraj" = argument
        c.greet("Niraj");
    }
}

