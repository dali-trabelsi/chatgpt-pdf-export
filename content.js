function hideAllByClass(classname, firstOnly, display) {
  var elements = document.getElementsByClassName(classname);
  if (elements.length === 0) return;
  if (firstOnly) {
    elements[0].style.display = display || "none";
    return;
  }
  Array.from(elements).forEach((el) => (el.style.display = display || "none"));
}

// Hide specific elements using the function
hideAllByClass("bg-token-sidebar-surface-primary", true);
hideAllByClass("bg-token-main-surface-primary");
hideAllByClass("gizmo-bot-avatar");
hideAllByClass("rounded-xl");
hideAllByClass("bg-[#f4f4f4]");
hideAllByClass("text-base", false, "unset");

// Fix code block overflow
Array.from(document.getElementsByClassName("overflow-y-auto")).forEach(
  (parent) => {
    Array.from(parent.children).forEach((child) => {
      if (child.tagName === "CODE") parent.style.overflowX = "hidden";
    });
  }
);

// Hide the left sidebar
var composerParent = document.getElementsByClassName("composer-parent")[0];
if (composerParent && composerParent.children[1]) {
  composerParent.children[1].style.display = "none";
}

Array.from(document.all).forEach((x) => (x.style.overflow = "unset"));

window.print();
