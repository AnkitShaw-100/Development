// Wait for the DOM to be fully loaded
$(document).ready(function() {
    // Get the 'total' from Chrome storage
    chrome.storage.sync.get('total', function(budget) {
        if (budget.total) {
            $('#total').text(budget.total);
        } else {
            $('#total').text(0);
        }
    });

    // When the 'spendAmount' button is clicked
    $('#spendAmount').click(function() {
        chrome.storage.sync.get('total', function(budget) {
            var newTotal = 0;
            if (budget.total) {
                newTotal += parseInt(budget.total);
            }

            // Get the value from the 'amount' input
            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            // Set the new 'total' in Chrome storage
            chrome.storage.sync.set({ 'total': newTotal }, function() {
                // Update the total on the page
                $('#total').text(newTotal);
                // Clear the input field
                $('#amount').val('');
            });
        });
    });
});
