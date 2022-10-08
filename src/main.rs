fn main() {
    // the struct, string are moved. while primeative like number and boolean are copyed.
    let message:&str = "Hello, world!";
    println!("{}",message);
}
