// content.js

// Capture the current HTML
html = document.documentElement.outerHTML;

// Open a new fullscreen window
w = window.open("", "_blank");

// Wait for the new window to load its own document
w.document.open();
w.document.write(html);
w.document.close();

// Once the new window's document is ready, modify it
w.onload = function () {
  function hideAllByClass(classname, firstOnly, display) {
    const elements = w.document.getElementsByClassName(classname);
    if (elements.length === 0) return;
    if (firstOnly) {
      elements[0].style.display = display || "none";
      return;
    }
    Array.from(elements).forEach(
      (el) => (el.style.display = display || "none")
    );
  }

  // Hide specific elements using the function
  hideAllByClass("bg-token-sidebar-surface-primary", true);
  hideAllByClass("bg-token-main-surface-primary");
  hideAllByClass("gizmo-bot-avatar");
  hideAllByClass("rounded-xl");

  // Fix code block overflow
  Array.from(w.document.getElementsByClassName("overflow-y-auto")).forEach(
    (parent) => {
      Array.from(parent.children).forEach((child) => {
        if (child.tagName === "CODE") parent.style.overflowX = "hidden";
      });
    }
  );

  // Hide the left sidebar
  var composerParent = w.document.getElementsByClassName("composer-parent")[0];
  if (composerParent && composerParent.children[1]) {
    composerParent.children[1].style.display = "none";
  }

  // hide my conv
  // hideAllByClass("bg-[#f4f4f4]");
  // hideAllByClass("text-base", false, "unset");

  Array.from(w.document.all).forEach((x) => {
    x.style.height = "fit-content";
  });

  // Open the print dialog after a slight delay to ensure all changes are applied
  setTimeout(() => {
    w.print();
  }, 1000);
};
