const API = "https://minicrm-803u.onrender.com/api/leads";

async function loadLeads() {
    const res = await fetch(API);
    const leads = await res.json();

    document.getElementById("totalLeads").innerText = leads.length;

    document.getElementById("contactedLeads").innerText =
        leads.filter(lead => lead.status === "Contacted").length;

    document.getElementById("convertedLeads").innerText =
        leads.filter(lead => lead.status === "Converted").length;

    const leadList = document.getElementById("leadList");
    leadList.innerHTML = "";

    leads.forEach(lead => {
        leadList.innerHTML += `
        <div class="card">
            <h3>${lead.name}</h3>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Source:</strong> ${lead.source}</p>
            <p><strong>Status:</strong> ${lead.status}</p>
            <p><strong>Notes:</strong> ${lead.notes}</p>

            <button onclick="editLead('${lead._id}')">Edit</button>
            <button onclick="deleteLead('${lead._id}')">Delete</button>
        </div>
        `;
    });
}