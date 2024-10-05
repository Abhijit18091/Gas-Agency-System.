
// Function to show/hide sections based on navbar link clicks
function showPage(pageId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    let selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}


/*Booking*/

document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function submitForm(event) { 
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const mobile = document.getElementById('mobile').value;
        const regNo = document.getElementById('regNo').value;
        const email = document.getElementById('email').value;

        // Validate if all fields are filled
        if (name.trim() === '' || address.trim() === '' || mobile.trim() === '' || regNo.trim() === '' || email.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Construct object with form data
        const formData = {
            name: name,
            address: address,
            mobile: mobile,
            regNo: regNo,
            email: email
        };

        // Display form data in console
        console.log('Gas Booking Details:');
        console.log(formData);

        // Optionally clear the form after submission
        document.getElementById('bookingForm').reset();
    }

    // Add event listener to the form submit event
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', submitForm);
    } else {
        console.error('Element with ID "bookingForm" not found.');
    }
});


function submitForm(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        mobile: document.getElementById('mobile').value,
        regNo: document.getElementById('regNo').value,
        email: document.getElementById('email').value
    };

    // Add data to Firestore
    db.collection('bookings').add(formData)
        .then(() => {
            alert('Booking successful!'); // Optional success message
            document.getElementById('bookingForm').reset(); // Clear form
        })
        .catch(error => {
            console.error('Error adding document: ', error);
            alert('Error: Unable to book. Please try again later.'); // Optional error message
        });
}









/* Admin page*/

document.addEventListener('DOMContentLoaded', function () {
    const adminLoginForm = document.getElementById('adminLoginForm');

    adminLoginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get values from the form
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;

        // Log details to the console
        console.log('Admin Login Details:');
        console.log('Username:', username);
        console.log('Password:', password);

        // Optional: Clear the form after submission
        adminLoginForm.reset();
    });
});



/*  Customer login*/

document.addEventListener('DOMContentLoaded', function () {
    const customerLoginForm = document.getElementById('customer');

    customerLoginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get values from the form
        const username = document.getElementById('customerUsername').value;
        const password = document.getElementById('Password').value; // Corrected to match the ID in HTML

        // Log details to the console
        console.log('Customer Login Details:');
        console.log('Username:', username);
        console.log('Password:', password);

        // Optional: Clear the form after submission
        customerLoginForm.reset();

    });
});

/* Register page*/

document.addEventListener('DOMContentLoaded', function () {
    const customerRegisterForm = document.getElementById('customerRegisterForm');

    customerRegisterForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get values from the form
        const fullname = document.getElementById('customerFullname').value;
        const email = document.getElementById('customerEmail').value;
        const password = document.getElementById('customerPassword2').value;

        // Log details to the console
        console.log('Customer Registration Details:');
        console.log('Full Name:', fullname);
        console.log('Email:', email);
        console.log('Password:', password)

        // Optional: Clear the form after submission
        customerRegisterForm.reset();
    });
});

