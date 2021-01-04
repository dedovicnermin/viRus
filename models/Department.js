const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    state: String,
    site: String
});

const Department = mongoose.model("Department", departmentSchema);



// let documents = [
//     {state: "Alabama", site: "https://www.alabamapublichealth.gov/"}, 
//     {state: "Alaska", site: "http://dhss.alaska.gov/Pages/default.aspx"},
//     {state: "Arizona", site: "https://www.azdhs.gov/"},
//     {state: "Arkansas", site: "https://healthy.arkansas.gov/"},
//     {state: "California", site: "https://www.cdph.ca.gov/"},
//     {state: "Colorado", site: "https://www.colorado.gov/cdphe"},
//     {state: "Connecticut", site: "https://www.ct.gov/dph/site/default.asp"},
//     {state: "Delaware", site: "https://www.dhss.delaware.gov/dhss/dph/index.html"},
//     {state: "District of Columbia", site: "https://doh.dc.gov/"},
//     {state: "Florida", site: "http://www.floridahealth.gov/"},
//     {state: "Georgia", site: "https://dph.georgia.gov/"},
//     {state: "Hawaii", site: "https://health.hawaii.gov/"},
//     {state: "Idaho", site: "https://www.healthandwelfare.idaho.gov/"},
//     {state: "Illinois", site: "https://www.dph.illinois.gov/"},
//     {state: "Indiana", site: "https://www.in.gov/isdh/"},
//     {state: "Iowa", site: "https://idph.iowa.gov/"},
//     {state: "Kansas", site: "https://www.kdheks.gov/"},
//     {state: "Kentucky", site: "https://chfs.ky.gov/agencies/dph/Pages/default.aspx"},
//     {state: "Louisiana", site: "http://dhh.louisiana.gov/"},
//     {state: "Maine", site: "https://www.maine.gov/dhhs/index.shtml"},
//     {state: "Maryland", site: "https://health.maryland.gov/"},//21
//     {state: "Massachusetts", site: "https://www.mass.gov/orgs/department-of-public-health"},
//     {state: "Michigan", site: "https://www.michigan.gov/mdch"},
//     {state: "Minnesota", site: "https://www.health.state.mn.us/"},
//     {state: "Mississippi", site: "https://msdh.ms.gov/"},
//     {state: "Missouri", site: "https://health.mo.gov/index.php"},
//     {state: "Montana", site: "https://dphhs.mt.gov/"},
//     {state: "Nebraska", site: "http://dhhs.ne.gov/Pages/default.aspx"},
//     {state: "Nevada", site: "http://dpbh.nv.gov/"},
//     {state: "New Hampshire", site: "https://www.dhhs.nh.gov/"},
//     {state: "New Jersey", site: "https://www.state.nj.us/health/"},
//     {state: "New Mexico", site: "https://nmhealth.org/"},
//     {state: "New York", site: "https://health.ny.gov/"},
//     {state: "North Carolina", site: "https://www.ncdhhs.gov/"},
//     {state: "North Dakota", site: "https://www.ndhealth.gov/"},
//     {state: "Ohio", site: "https://www.odh.ohio.gov/"},
//     {state: "Oklahoma", site: "https://www.ok.gov/health/"},
//     {state: "Oregon", site: "https://www.oregon.gov/oha/ph/pages/index.aspx"},
//     {state: "Pennsylvania", site: "https://www.health.pa.gov/Pages/default.aspx"},
//     {state: "Rhode Island", site: "https://health.ri.gov/"},
//     {state: "South Carolina", site: "https://www.scdhec.gov/"},
//     {state: "South Dakota", site: "https://doh.sd.gov/"},
//     {state: "Tennessee", site: "https://www.tn.gov/health.html"},
//     {state: "Texas", site: "https://dshs.state.tx.us/"},
//     {state: "Utah", site: "https://health.utah.gov/"},
//     {state: "Vermont", site: "https://healthvermont.gov/"},
//     {state: "Virginia", site: "https://vdh.virginia.gov/"},
//     {state: "Washington", site: "https://www.doh.wa.gov/"},
//     {state: "West Virginia", site: "https://dhhr.wv.gov/bph/"},
//     {state: "Wisconsin", site: "https://www.dhs.wisconsin.gov/"},
//     {state: "Wyoming", site: "https://health.wyo.gov/"},
// ];

// Department.insertMany(documents).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })



module.exports = Department;