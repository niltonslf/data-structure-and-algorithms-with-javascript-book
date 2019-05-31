// Sequência fibonacci

const fibonacci = []
fibonacci[1] = 1
fibonacci[2] = 1

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] +  fibonacci[i-2]
}

fibonacci.forEach(fibo => {
    console.log('fibo',fibo)
});

