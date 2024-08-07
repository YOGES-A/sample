const deleteButtons = document.querySelectorAll('.deleteButton');
        const confirmationPopup = document.getElementById('confirmationPopup');
        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        let currentDeleteButton;

        deleteButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                confirmationPopup.style.display = 'flex';
                currentDeleteButton = button; // Store the current delete button
            });
        });

        yesBtn.addEventListener('click', function() {
            // Perform delete operation here
            console.log('Item deleted');
            confirmationPopup.style.display = 'none';
            // Remove the row containing the current delete button
            const row = currentDeleteButton.closest('tr');
            row.parentNode.removeChild(row);
        });

        noBtn.addEventListener('click', function() {
            confirmationPopup.style.display = 'none';
        });