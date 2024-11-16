console.log("Script running...");

document.querySelector('.cross').style.display = 'none'; // Hide cross initially

document.querySelector('.hamburger').addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebarGo'); // Toggle visibility

    // Toggle menu and cross icons
    if (sidebar.classList.contains('sidebarGo')) {
        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.cross').style.display = 'inline';
    } else {
        document.querySelector('.menu').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
});


// console.log("Script running...");

// const sidebar = document.querySelector('.sidebar');
// const menuIcon = document.querySelector('.menu');
// const crossIcon = document.querySelector('.cross');

// // Initial state: sidebar hidden, menu icon visible, cross icon hidden
// sidebar.classList.add('sidebarGo'); // Hide sidebar initially
// crossIcon.style.display = 'none'; // Only menu icon visible initially

// // Toggle sidebar visibility on hamburger click
// document.querySelector('.hamburger').addEventListener("click", () => {
//     if (sidebar.classList.contains('sidebarGo')) {
//         // Show the sidebar when clicking menu icon
//         sidebar.classList.remove('sidebarGo');
//         menuIcon.style.display = 'inline';
//         crossIcon.style.display = 'none';
//     } else {
//         // Hide the sidebar when clicking cross icon
//         sidebar.classList.add('sidebarGo');
//         crossIcon.style.display = 'inline';
//         menuIcon.style.display = 'none';
//     }
// });
