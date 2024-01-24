function bookSlot() {
    // Get selected date from the input field
    var selectedDate = document.getElementById("selectDate").value;

    // Convert selected date string to a Date object
    var selectedDateTime = new Date(selectedDate);

    // Get the current date
    var currentDate = new Date();

    // Check if the selected date is after the current date
    if (selectedDateTime > currentDate) {
        // Continue with booking logic
        // You can add your booking logic here

        // For demonstration purposes, let's just log a success message
        alert("Slot booked successfully!");
    } else {
        // Display an error message for invalid date
        alert("Please select a date after the current date.");
    }
}