const elements = {
    H: "Hydrogen",
    He: "Helium",
    Li: "Lithium",
    Be: "Beryllium",
    B: "Boron",
    C: "Carbon",
    N: "Nitrogen",
    O: "Oxygen",
    F: "Fluorine",
    Ne: "Neon"
};

function findElement() {
    const symbol = document.getElementById("symbol").value.trim();
    const elementName = elements[symbol];
    document.getElementById("result").textContent = elementName ? elementName : "Element not found";
}
