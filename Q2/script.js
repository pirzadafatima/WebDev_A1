const form = document.getElementById('job_app_form');
const applicationsTable = document.getElementById('applicationsTable');
const tableContainer = document.getElementById('tableContainer');
const viewTableBtn = document.getElementById('viewTableBtn');
const tableBody = applicationsTable.querySelector('tbody');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (validateForm()) {
    
        const formData = new FormData(form);
        const name = `${formData.get('firstName')} ${formData.get('lastName')}`;
        const email = formData.get('email');
        const phone = formData.get('phone');
        const resume = formData.get('resume').name;
        const coverLetter = formData.get('coverLetter').slice(0, 50) + '...';
        const street = formData.get('street');
        const city = formData.get('city');
        const state = formData.get('state');
        const zip = formData.get('zip');
        const educationLevel = formData.get('educationLevel');
        const schoolName = formData.get('schoolName');
        const major = formData.get('major');
        const gradYear = formData.get('gradYear');
        const jobTitle = formData.get('jobTitle');
        const companyName = formData.get('companyName');
        const employmentDates = formData.get('employmentDates');
        const jobResponsibilities = formData.get('jobResponsibilities');
        const skills = formData.get('skills');
        const certifications = formData.get('certifications');
        const startDate = formData.get('startDate');
        const relocate = formData.get('relocate');
        const workSchedule = formData.get('workSchedule');
        const refName = formData.get('refName');
        const refContact = formData.get('refContact');
        const relationship = formData.get('relationship');
        const whyCompany = formData.get('whyCompany');
        const terms = formData.get('terms') ? 'Yes' : 'No';
        const privacy = formData.get('privacy') ? 'Yes' : 'No';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${resume}</td>
            <td>${coverLetter}</td>
            <td>${street}</td>
            <td>${city}</td>
            <td>${state}</td>
            <td>${zip}</td>
            <td>${educationLevel}</td>
            <td>${schoolName}</td>
            <td>${major}</td>
            <td>${gradYear}</td>
            <td>${jobTitle}</td>
            <td>${companyName}</td>
            <td>${employmentDates}</td>
            <td>${jobResponsibilities}</td>
            <td>${skills}</td>
            <td>${certifications}</td>
            <td>${startDate}</td>
            <td>${relocate}</td>
            <td>${workSchedule}</td>
            <td>${refName}</td>
            <td>${refContact}</td>
            <td>${relationship}</td>
            <td>${whyCompany}</td>
            <td>${terms}</td>
            <td>${privacy}</td>
        `;
        tableBody.appendChild(row);

        alert('Application submitted successfully!');
        form.reset();
        viewTableBtn.style.display = viewTableBtn.style.display === 'none' ? 'block' : 'none';
    } else {
        alert('Please correct the errors in the form!');
    }
});

// Validate form fields
function validateForm() {
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const startDate = new Date(document.getElementById('startDate').value);
    const gradYear = parseInt(document.getElementById('gradYear').value);
    const currentYear = new Date().getFullYear();

    let isValid = true;

    const email = document.getElementById('email').value;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        isValid = false;
    }

    if (startDate <= new Date()) {
        alert('Start date must be in the future.');
        isValid = false;
    }

    if (gradYear > currentYear) {
        alert('Graduation year cannot be in the future.');
        isValid = false;
    }

    const textFields = [
        'firstName', 'lastName', 'city', 'state', 
        'jobTitle','jobResponsibilities', 'skills', 'certifications', 
        'refName', 'relationship', 'whyCompany'
    ];

    textFields.forEach(field => {
        const value = document.getElementById(field).value;
        if (/\d/.test(value)) {
            alert(`Field ${field.replace(/([A-Z])/g, ' $1')} should not contain numbers.`);
            isValid = false;
        }
    });

    return isValid;
}

viewTableBtn.addEventListener('click', function () {
    tableContainer.style.display = tableContainer.style.display === 'none' ? 'block' : 'none';
});
