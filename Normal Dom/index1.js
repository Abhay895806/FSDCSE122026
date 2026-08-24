const root = document.getElementById("container");
const btn = document.getElementById("btn");
console.log(root);

const h2 = document.createElement("h2");
h2.innerText = "RESUME";

const loader = document.createElement("h2");
root.appendChild(loader);

const table = document.createElement("table");
const img = document.createElement("img");

function buildResume() {
    try {
        loader.innerText = "Building...";

        table.setAttribute("cellpadding", "15");
        table.setAttribute("width", "600");
        table.style.borderCollapse = "collapse";

        const row1 = document.createElement("tr");
        const row2 = document.createElement("tr");
        const row3 = document.createElement("tr");
        const row4 = document.createElement("tr");

        const left1 = document.createElement("td");
        const right1 = document.createElement("td");

        const left2 = document.createElement("td");
        const right2 = document.createElement("td");

        const left3 = document.createElement("td");
        const right3 = document.createElement("td");

        const left4 = document.createElement("td");
        const right4 = document.createElement("td");

        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n_pM9lIEGQna-sAXN8nM12xOTpzGFkq2HWjmMMPy4g&s=10";
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");
        img.style.borderRadius = "50%";

        left1.appendChild(img);
        right1.innerText = "Abhay";

        left2.innerText = "Course";
        right2.innerText = "B.Tech";

        left3.innerText = "Stream";
        right3.innerText = "CSE";

        left4.innerText = "Qualification";
        right4.innerText = "Full Stack Developer";

        row1.appendChild(left1);
        row1.appendChild(right1);

        row2.appendChild(left2);
        row2.appendChild(right2);

        row3.appendChild(left3);
        row3.appendChild(right3);

        row4.appendChild(left4);
        row4.appendChild(right4);

        table.appendChild(row1);
        table.appendChild(row2);
        table.appendChild(row3);
        table.appendChild(row4);

        root.appendChild(h2);
        root.appendChild(table);

    } catch (error) {
        console.log(error);
        loader.innerText = "Error in building resume";
    } finally {
        root.removeChild(loader);
    }
}

btn.addEventListener("click", buildResume);