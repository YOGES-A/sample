// Function to toggle the visibility of  dropdown content
function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdownContent'); // Get the dropdown content element 
    dropdownContent.classList.toggle('show'); // Toggle the 'show' class to display or hide the dropdown
}

// Function to filter list items based on the selected option
function filterItems(option) {
    var items = document.querySelectorAll('#itemList li'); // Select all list items within the element with ID 'itemList'
    items.forEach(item => {
        if (item.textContent.includes(option)) { // Check if the item's text includes the selected option
            item.style.display = ''; // Show the item if it matches the option
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match the option
        }
    });
    document.getElementById('dropdownContent').classList.remove('show'); // Hide the dropdown content after filtering
}

// Event listener to close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
        // var dropdowns = document.querySelectorAll('.dropdown-content'); // Select all elements with the class 'dropdown-content'
        // dropdowns.forEach(dropdown => {
            var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
        }
    }
}

// Function to filter table rows based on user input and selected column

function filterTable() {
    var input = document.getElementById('filterInput').value.toLowerCase(); // Get the filter input value and convert to lowercase
    var select = document.getElementById('sortColumn'); // Get the select element for column selection
    var column = select.value; // Get the selected column index
    var table = document.getElementById('dataTable'); // Get the table element
    var rows = table.querySelectorAll('tbody tr'); // Select all rows within the table body

    rows.forEach(row => {
        var cells = row.getElementsByTagName('td'); // Get all cells within the current row
        var cellText = cells[column] ? cells[column].textContent.toLowerCase() : ''; // Get the text content of the cell in the selected column, if it exists
        
        if (cellText.includes(input)) { // Check if the cell text includes the filter input
            row.style.display = ''; // Show the row if it matches the input
        } else {
            row.style.display = 'none'; // Hide the row if it doesn't match the input
        }
    });
}



// Function to apply sorting to the table based on selected column and order
function applySorting() {
    const column = parseInt(document.getElementById('sortColumn').value); // Get the selected column index and convert to integer
    const order = document.getElementById('sortOrder').value; // Get the selected sort order (asc or desc)
    const extreme = document.getElementById('extreme').value; // Get the selected extreme option (min or max)

    const table = document.getElementById('dataTable'); // Get the table element by its ID
    const rows = Array.from(table.getElementsByTagName('tr')).slice(1); // Convert rows to an array, excluding the header row

    // Sort the rows based on the selected column and order
    rows.sort((a, b) => {
        const aText = a.getElementsByTagName('td')[column].textContent; // Get the text content of the cell in the selected column for row 'a'
        const bText = b.getElementsByTagName('td')[column].textContent; // Get the text content of the cell in the selected column for row 'b'

        if (column === 1) { // Check if the column is the Age column (assumed to be numeric)
            return order === 'asc' ? aText - bText : bText - aText; // Sort numerically
        } else { // For text columns
            if (aText < bText) return order === 'asc' ? -1 : 1; // Sort alphabetically in ascending order
            if (aText > bText) return order === 'asc' ? 1 : -1; // Sort alphabetically in descending order
            return 0; // If equal, return 0
        }
    });

    // Handle the extreme options (min or max)
    if (extreme === 'max') {
        const maxRow = rows[rows.length - 1]; // Get the last row (maximum value)
        table.getElementsByTagName('tbody')[0].innerHTML = ''; // Clear the table body
        table.getElementsByTagName('tbody')[0].appendChild(maxRow); // Append the maximum row
    } else if (extreme === 'min') {
        const minRow = rows[0]; // Get the first row (minimum value)
        table.getElementsByTagName('tbody')[0].innerHTML = ''; // Clear the table body
        table.getElementsByTagName('tbody')[0].appendChild(minRow); // Append the minimum row
    } else {
        table.getElementsByTagName('tbody')[0].innerHTML = ''; // Clear the table body
        rows.forEach(row => table.getElementsByTagName('tbody')[0].appendChild(row)); // Append all sorted rows
    }
}
function updateSortOrderOptions() {
    const sortOrder = document.getElementById('sortOrder');
    const sortColumn = document.getElementById('sortColumn').value;
    sortOrder.innerHTML = ''; // Clear existing options

    if (sortColumn === 'name') {
        sortOrder.innerHTML += '<option value="asc">Ascending</option>';
        sortOrder.innerHTML += '<option value="desc">Descending</option>';
    } else {
        sortOrder.innerHTML += '<option value="max">Maximum</option>';
        sortOrder.innerHTML += '<option value="min">Minimum</option>';
    }
}

// Initial call to set sort order options based on default sort column
updateSortOrderOptions();

// // 
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('deleteButton').addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default link behavior
//         confirm('Are you sure you want to delete this user?')
//     });
// });

// delete pop up window

document.getElementById('deleteBtn').addEventListener('click', function() {
    document.getElementById('confirmationPopup').style.display = 'flex';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    // Perform delete operation here
    console.log('Item deleted');
    document.getElementById('confirmationPopup').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('confirmationPopup').style.display = 'none';
});
