// Select the elements
const item1 = document.querySelector('.rectangle-item:nth-child(1)');
const item2 = document.querySelector('.rectangle-item:nth-child(2)');
const item3 = document.querySelector('.rectangle-item:nth-child(3)');

// Create a container for the custom cursor image
const cursorImageContainer = document.createElement('div');
cursorImageContainer.classList.add('cursor-image');
document.body.appendChild(cursorImageContainer);

// Create the image inside the container
const cursorImage = document.createElement('img');
cursorImageContainer.appendChild(cursorImage);

// Track if the cursor is over any item
let isHovering = false;

// Function to move the cursor image with the cursor
document.addEventListener('mousemove', (e) => {
    const imgWidth = cursorImageContainer.offsetWidth || 150;  // Adjusted size
    const imgHeight = cursorImageContainer.offsetHeight || 100;

    // Default offsets (can be modified based on each item)
    let offsetX = 0;
    let offsetY = 0;

    // Check which item the cursor is over
    if (item1.contains(e.target)) {
        offsetX = 970;  // Item 1 specific offset
        offsetY = -780;
        isHovering = true;  // Set hover flag
    } else if (item2.contains(e.target)) {
        offsetX = -380;  // Item 2 specific offset
        offsetY = -1200;
        isHovering = true;  // Set hover flag
    } else if (item3.contains(e.target)) {
        offsetX = 425;  // Item 3 specific offset
        offsetY = -1200;
        isHovering = true;  // Set hover flag
    } else {
        isHovering = false;  // Reset hover flag if not over an item
    }

    // Update position only if hovering
    if (isHovering) {
        gsap.to(cursorImageContainer, {
            x: e.clientX - imgWidth / 2 + offsetX,  // Shift right
            y: e.clientY - imgHeight / 2 + offsetY, // Shift down slightly
            duration: 0.1,
            ease: "power2.out",
        });
    }
});


// Function to show/hide and resize the cursor image
function addCursorEffect(element, imagePath) {
    element.addEventListener('mouseenter', () => {
        cursorImage.src = imagePath;

        // Wait until the image loads to get accurate dimensions
        cursorImage.onload = () => {
            cursorImageContainer.style.width = cursorImage.naturalWidth + 'px';
            cursorImageContainer.style.height = cursorImage.naturalHeight + 'px';

            gsap.to(cursorImageContainer, { opacity: 1, duration: 0.3 });
        };
    });

    element.addEventListener('mouseleave', () => {
        // Only fade out the image, don't affect its position
        gsap.to(cursorImageContainer, { opacity: 0, duration: 0.3 });
    });
}

// Apply effect to multiple items with different images
addCursorEffect(item1, 'item1.png');
addCursorEffect(item2, 'api.png');
addCursorEffect(item3, 'api.png');
