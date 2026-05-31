const API = "/api/leads";

async function loadLeads() {

    const res = await fetch(API);

    const leads = await res.json();

    document.getElementById("totalLeads").innerText =
        leads.length;

    document.getElementById("contactedLeads").innerText =
        leads.filter(
            lead => lead.status === "Contacted"
        ).length;

    document.getElementById("convertedLeads").innerText =
        leads.filter(
            lead => lead.status === "Converted"
        ).length;

    const leadList =
        document.getElementById("leadList");

    leadList.innerHTML = "";

    leads.forEach(lead => {

        leadList.innerHTML += `
        <div class="card">

            <h3>${lead.name}</h3>

            <p><strong>Email:</strong>
            ${lead.email}</p>

            <p><strong>Source:</strong>
            ${lead.source}</p>

            <p><strong>Status:</strong>
            ${lead.status}</p>

            <p><strong>Notes:</strong>
            ${lead.notes}</p>

            <button
            onclick="editLead('${lead._id}')">
            Edit
            </button>

            <button
            onclick="deleteLead('${lead._id}')">
            Delete
            </button>

        </div>
        `;
    });
}

document
.getElementById("leadForm")
.addEventListener(
"submit",
async(e)=>{

    e.preventDefault();

    const lead = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        source:
        document.getElementById("source").value,

        status:
        document.getElementById("status").value,

        notes:
        document.getElementById("notes").value
    };

    await fetch(API,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(lead)

    });

    document
    .getElementById("leadForm")
    .reset();

    loadLeads();
});

async function deleteLead(id){

    await fetch(`${API}/${id}`,{

        method:"DELETE"

    });

    loadLeads();
}

async function editLead(id){

    const name =
    prompt("Enter Name");

    const email =
    prompt("Enter Email");

    const source =
    prompt("Enter Source");

    const status =
    prompt(
    "Enter Status: New, Contacted, Converted"
    );

    const notes =
    prompt("Enter Notes");

    await fetch(`${API}/${id}`,{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            name,
            email,
            source,
            status,
            notes
        })

    });

    loadLeads();
}

loadLeads();