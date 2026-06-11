package Basic_Cheeze;

public class SurfaceAreaOfACuboid {
    static void main(String[] args) {
        double l = 5;
        double b = 6;
        double h = 8;
        double area;
        area = 2 * (b*l + b*h + h*l); // ye formula bas total surface are ke liye hai aur agar valume puchha hota to formula = l * b * h hota
        System.out.println("The are of the Cuboid is : "+area);

    }
}
