document.addEventListener('DOMContentLoaded', function () {
    const parentCategory = document.getElementById('parent_category');
    const subCategory = document.getElementById('sub_category');

    parentCategory.addEventListener('change', function () {
        const selectedValue = this.value;

        // Clear previous sub-categories
        subCategory.innerHTML = '<option value="">--Projects Sub-Category--</option>';

        // Define sub-categories for each parent category
        const subCategories = {
            '22': [
                { value: '2201', text: 'Sub-Category 1 for MahaBHUMI' },
                { value: '2202', text: 'Sub-Category 2 for MahaBHUMI' }
            ],
            '23': [
                { value: '2301', text: 'Sub-Category 1 for Asset Mapping' },
                { value: '2302', text: 'Sub-Category 2 for Asset Mapping' }
            ],
            // Add other categories similarly
        };

        // Populate sub-category based on selected parent category
        if (subCategories[selectedValue]) {
            subCategories[selectedValue].forEach(function (subCat) {
                const option = document.createElement('option');
                option.value = subCat.value;
                option.textContent = subCat.text;
                subCategory.appendChild(option);
            });
        }
    });
});
