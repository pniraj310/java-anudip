package OOPS;

public class Polimorphism {
    public static class Dog{
        void speak(){
            System.out.println("Bhau Bhau");
        }
    }
    public static class Cat{
        void speak(){
            System.out.println("Meow Meow");
        }
    }
    public static class Lion{
        void speak(){
            System.out.println("GRRRR");
        }
    }
    public static class Pikachu {
        void speak(){
            System.out.println("Pika Pika");
        }
    }
    public static class Human{
        void speak(){
            System.out.println("Hello");
        }
    }


    static void main(String[] args) {
        Dog d = new Dog();
        Cat c = new Cat();
        Human h = new Human();
        Lion l = new Lion();

        d.speak();
        c.speak();
        h.speak();
        l.speak();


    }
}
