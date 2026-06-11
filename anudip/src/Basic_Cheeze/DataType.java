package Basic_Cheeze;

public class DataType {
    public static void main(String[] args) {

        // Primitive types
        byte b = 100;
        short s = 1000;
        int i = 100000;
        long l = 9999999L;
        float f = 3.14f;  
        double d = 3.14159;
        char c = 'A';
        boolean bool = true;

        System.out.println("byte: " + b);
        System.out.println("int: " + i);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + bool);

        // Widening — automatic
        int x = 100;
        double y = x; // auto ✅
        System.out.println("Widening: " + y);

        // Narrowing — manual
        double p = 9.99;
        int q = (int) p; // manual cast
        System.out.println("Narrowing: " + q);

        // String to int
        String str = "123";
        int num = Integer.parseInt(str);
        System.out.println("Parsed: " + num);

        // int to String
        int n = 456;
        String result = String.valueOf(n);
        System.out.println("String: " + result);

        // char to int — ASCII
        char ch = 'A';
        int ascii = ch;
        System.out.println("ASCII of A: " + ascii);
    }
}

// Output:
// byte: 100
// int: 100000
// double: 3.14159
// char: A
// boolean: true
// Widening: 100.0
// Narrowing: 9
// Parsed: 123
// String: 456
// ASCII of A: 65