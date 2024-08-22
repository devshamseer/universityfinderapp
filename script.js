const schoolAPI = "https://devshamseer.github.io/Kerala-School-DB/kerala-school.json";
const universityAPI = "https://devshamseer.github.io/Kerala-School-DB/indian-university-list.json";

let schools = [];
let universities = [];

// Fetch schools data
fetch(schoolAPI)
    .then(response => response.json())
    .then(data => {
        schools = data.data;
        displaySchools(schools);
    })
    .catch(error => console.error('Error fetching schools data:', error));

// Fetch universities data
fetch(universityAPI)
    .then(response => response.json())
    .then(data => {
        universities = data;
        displayUniversities(universities);
    })
    .catch(error => console.error('Error fetching universities data:', error));

function displaySchools(list) {
    const schoolList = document.getElementById('school-list');
    schoolList.innerHTML = '';

    list.forEach(school => {
        const schoolItem = document.createElement('div');
        schoolItem.className = 'institution-item';
        
        schoolItem.innerHTML = `
            <h3>${school["school Name"]}</h3>
            <p>Code: ${school["school code"]}</p>
            <p>Type: ${school["school Type"]}</p>
            <p>District: ${school.District}</p>
            <p>Phone: ${school.Phone}</p>
            <p>Email: ${school.email}</p>
        `;
        
        schoolList.appendChild(schoolItem);
    });
}

function displayUniversities(list) {
    const universityList = document.getElementById('university-list');
    universityList.innerHTML = '';

    list.forEach(university => {
        const universityItem = document.createElement('div');
        universityItem.className = 'institution-item';
        
        universityItem.innerHTML = `
            <h3>${university["University Name"]}</h3>
            <p>College: ${university["College Name"]}</p>
            <p>Type: ${university["College Type"]}</p>
            <p>State: ${university["State Name"]}</p>
            <p>District: ${university["District Name"]}</p>
        `;
        
        universityList.appendChild(universityItem);
    });
}

function searchInstitutions() {
    const query = document.getElementById('search-bar').value.toLowerCase();

    const filteredSchools = schools.filter(school =>
        school["school Name"].toLowerCase().includes(query) ||
        school.District.toLowerCase().includes(query)
    );
    displaySchools(filteredSchools);

    const filteredUniversities = universities.filter(university =>
        university["University Name"].toLowerCase().includes(query) ||
        university["College Name"].toLowerCase().includes(query) ||
        university["State Name"].toLowerCase().includes(query)
    );
    displayUniversities(filteredUniversities);
}
