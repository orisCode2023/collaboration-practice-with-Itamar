import readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Global variables to store fetched posts and API call times
let posts = [];
let apiCallTimes = [];

// Function to display menu
function displayMenu() {
    console.log('\n=== MENU ===');
    console.log('1. Fetch 10 Posts');
    console.log('2. Display Post Statistics');
    console.log('3. Display API Performance Statistics');
    console.log('4. Exit');
    console.log('============\n');
}

// Helper function to get user input
function promptUser(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Option 1: Fetch posts
async function fetchPosts() {
    // TODO: Implement this function
    // Remember to:
    // 1. Print "Loading posts..." before fetching
    // 2. Track start time with Date.now()
    // 3. Make the fetch request
    // 4. Track end time and calculate duration
    // 5. Store the duration in apiCallTimes array

    console.log("Loading posts...")
    const before = Date.now()
    console.log(before)
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        posts.push(await response.json())
        console.log(posts);
        const after = Date.now()
        console.log(after)
        const duration = after - before
        console.log(`The duration time is ${duration} `)
        apiCallTimes.push(duration)
    } catch (error) {
        console.error(error.message);
    }
}


// Option 2: Display post statistics
function displayPostStatistics() {
    // TODO: Implement this function
}

// Option 3: Display API performance statistics
function displayApiPerformance() {
    // TODO: Implement this function
    try {
        if (posts.length > 0) {
            console.log("There is a requests in the array ")
        }
        console.log("f#@@@#@#@k you Itamar")
    } catch (error) {
        console.log("The array is empty from requests ")
    }
}

// Main function to run the application
async function main() {
    let running = true;

    while (running) {
        displayMenu();
        const choice = await promptUser('Enter your choice (1-4): ');

        switch (choice) {
            case '1':
                await fetchPosts();
                break;
            case '2':
                displayPostStatistics();
                break;
            case '3':
                displayApiPerformance();
                break;
            case '4':
                console.log('Goodbye!');
                running = false;
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter 1, 2, 3, or 4.');
        }
    }
}

// Run the application
main();