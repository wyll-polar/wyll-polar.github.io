//Variable definitions
//*********************

//Country options
const countryOptions = `
    <option value="">-- Select --</option>
    <option value="Canada">Canada</option>
    <option value="United States">United States</option>
    <option value="United Kingdom">United Kingdom</option>
    <option value="Australia">Australia</option>
    <option value="France">France</option>
    <option value="Korea, Republic of">Korea, Republic of</option>
    <option value="Afghanistan">Afghanistan</option>
    <option value="Åland Islands">Åland Islands</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antarctica">Antarctica</option>
    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Bouvet Island">Bouvet Island</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
    <option value="Brunei Darussalam">Brunei Darussalam</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote D'ivoire">Cote D'ivoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Territories">French Southern Territories</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guernsey">Guernsey</option>
    <option value="Guinea">Guinea</option>
    <option value="Guinea-bissau">Guinea-bissau</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="India">India</option>
    <option value="Indonesia">Indonesia</option>
    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jersey">Jersey</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macao">Macao</option>
    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malawi">Malawi</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
    <option value="Moldova, Republic of">Moldova, Republic of</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montenegro">Montenegro</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Namibia">Namibia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherlands">Netherlands</option>
    <option value="Netherlands Antilles">Netherlands Antilles</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau">Palau</option>
    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Philippines">Philippines</option>
    <option value="Pitcairn">Pitcairn</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russian Federation">Russian Federation</option>
    <option value="Rwanda">Rwanda</option>
    <option value="Saint Helena">Saint Helena</option>
    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
    <option value="Saint Lucia">Saint Lucia</option>
    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
    <option value="Samoa">Samoa</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Serbia">Serbia</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
    <option value="Thailand">Thailand</option>
    <option value="Togo">Togo</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Uganda">Uganda</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Emirates">United Arab Emirates</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
  `;

//Form Sections
const sections = [
  "section1", "section2", "section3", "section4", "section5",
  "section6", "section7", "section8", "section9", "section10", "section11",
  "section12", "section13", "section14", "section15", "section16",
  "section17", "section18", "section19", "section20"
];

//Initialize Current Section at 0
let currentSection = 0;

//Toggle variables
const startInput = document.getElementById("labUseStart");
const endInput = document.getElementById("labUseEnd");
const equipmentRadios = document.getElementsByName("bringing_equipment");
const equipmentListDiv = document.getElementById("equipment_list_div");
const leavingRadios = document.getElementsByName("leaving_equipment");
const equipmentLeftDiv = document.getElementById("equipment_left_div");
const hazardousRadios = document.getElementsByName("using_hazardous");
const hazardousDetailsDiv = document.getElementById("hazardous_details_div");
const ppeRadios = document.getElementsByName("has_ppe");
const ppeDiv = document.getElementById("ppe_description_div");
const disposalRadios = document.getElementsByName("has_disposal_plan");
const disposalDiv = document.getElementById("disposal_plan_div");
const labTechRadios = document.getElementsByName("lab-tech_support");
const labTechDiv = document.getElementById("labTechSupportDiv");
const afterHoursRadios = document.getElementsByName("after_hours");
const afterHoursDiv = document.getElementById("afterHoursReasonDiv");
const engageRadios = document.getElementsByName("engage_community");
const engagementDiv = document.getElementById("engagementPlanDiv");


//email.js initialization
(function () {
  emailjs.init("kUtUMk6RWW5wp5Q91"); // Your public key
})();



//Navigation Function definitions
//******************************
function showSection(index) {
  sections.forEach((id, i) => {
    document.getElementById(id).style.display = i === index ? "block" : "none";
    setSectionValidation(id, i === index);  // 👈 Enable validation only for the visible section
  });
  document.getElementById("progressBar").style.width = ((index + 1) / sections.length * 100) + "%";
}

//For next button Logic
function nextSection() {
  const sectionEl = document.getElementById(sections[currentSection]);

  // Validate required inputs before moving on
  const requiredFields = sectionEl.querySelectorAll("input[required], select[required], textarea[required]");
  let valid = true;

  requiredFields.forEach(input => {
    const isRadioGroup = input.type === "radio" && input.name;
    if (isRadioGroup) {
      const groupChecked = sectionEl.querySelectorAll(`input[name="${input.name}"]:checked`).length > 0;
      if (!groupChecked) {
        valid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    } else if (!input.value.trim()) {
      valid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  // ✅ New: Validate required checkbox groups
  const requiredCheckboxGroups = sectionEl.querySelectorAll('[data-required-group]');
  requiredCheckboxGroups.forEach(group => {
    const checkboxes = group.querySelectorAll('input[type="checkbox"]');

    // Skip validation if group or any checkbox is hidden
    const isHidden = group.offsetParent === null || Array.from(checkboxes).every(cb => cb.disabled || cb.offsetParent === null);
    if (isHidden) return;

    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
    if (!anyChecked) {
      valid = false;
      group.classList.add("error");
    } else {
      group.classList.remove("error");
    }
  });


  if (!valid) {
    alert("Please complete all required fields before proceeding.");
    return;
  }

  // Special skip logic
  const applicantType = document.querySelector('input[name="applicant_type"]:checked')?.value;
  if (sections[currentSection] === 'section5' && applicantType === 'Accommodation Only') {
    currentSection = sections.indexOf('section21');
    showSection(currentSection);
    saveProgress();
    return;
  }

  // Move to next section
  if (currentSection < sections.length - 1) {
    currentSection++;
    showSection(currentSection);
    saveProgress();
  }
}

//For prev button logic
function previousSection() {
  const applicantType = document.querySelector('input[name="applicant_type"]:checked')?.value;
  if (sections[currentSection] === 'section20' && applicantType === 'Accommodation Only') {
    currentSection = sections.indexOf('section5');
    showSection(currentSection);
    saveProgress();
    return;
  }
  if (currentSection > 0) {
    currentSection--;
    showSection(currentSection);
    saveProgress();
  }
}

//Progress Function Definitions
//*****************************
//Save progress locally as the form is filled
function saveProgress() {
  const formData = new FormData(document.getElementById("intakeForm"));
  const values = {};
  for (let [key, value] of formData.entries()) {
    if (!values[key]) {
      values[key] = value;
    } else if (Array.isArray(values[key])) {
      values[key].push(value);
    } else {
      values[key] = [values[key], value];
    }
  }
  localStorage.setItem("researchIntakeDraft", JSON.stringify(values));
  localStorage.setItem("currentSectionIndex", currentSection.toString());
}

// Load saved form progress from localStorage, if it exists.
function loadProgress() {
  const saved = localStorage.getItem("researchIntakeDraft");
  const sectionIndex = parseInt(localStorage.getItem("currentSectionIndex"), 10);
  if (saved) {
    const values = JSON.parse(saved);
    for (let key in values) {
      const field = document.getElementsByName(key);
      if (field.length > 1 && Array.isArray(values[key])) {
        field.forEach((el, i) => {
          if (values[key][i]) el.value = values[key][i];
        });
      } else if (field[0]) {
        field[0].value = values[key];
      }
    }
  }
  if (!isNaN(sectionIndex)) {
    currentSection = sectionIndex;
  }
  showSection(currentSection);
}

//Other funtion Definitions
//*************************
//word counter for textarea with limit
function countWords(textarea, counterId) {
  const text = textarea.value.trim();
  const wordCount = text ? text.split(/\\s+/).length : 0;
  const limit = parseInt(counterId.includes("summary") ? 200 : 150, 10);
  const counter = document.getElementById(counterId);
  counter.textContent = `${wordCount} / ${limit} words`;
  textarea.setCustomValidity(wordCount > limit ? `Please limit to ${limit} words.` : "");
}

// Toggle logic functions
//**************************

//Toggle Primary Contact Fields
function togglePrimaryContact(show) {
  document.getElementById("primaryContactFields").style.display = show ? "block" : "none";
}

//Toggle funding number field
function toggleFundingField(show) {
  document.getElementById("fundingField").style.display = show ? "block" : "none";
}

//toggle statff contact field
function toggleStaffContact(show) {
  document.getElementById("staffContactField").style.display = show ? "block" : "none";
}

//toggle shipping details fields
function toggleShippingDetails(show) {
  document.getElementById("shippingDetails").style.display = show ? "block" : "none";
}


//toggle technical request description
function toggleTechnicalRequest(show) {
  document.getElementById("technicalRequestField").style.display = show ? "block" : "none";
}

//toggle lab details fields
function toggleLabDetails(show) {
  document.getElementById("labDetails").style.display = show ? "block" : "none";
}

//toggle lab list
function toggleLabSelection(show) {
  document.getElementById("labSelection").style.display = show ? "block" : "none";
}

//toggle equipment request table
function toggleEquipmentTable(show) {
  document.getElementById("equipmentTableSection").style.display = show ? "block" : "none";
}

//toggle personel support list
function togglePersonnelSupport(show) {
  document.getElementById("personnelSupportSection").style.display = show ? "block" : "none";
}

//Toggle lab equipment
equipmentRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      equipmentListDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      equipmentListDiv.style.display = "none";
    }
  });
});

//Toggle leaving behind lab equipment
leavingRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      equipmentLeftDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      equipmentLeftDiv.style.display = "none";
    }
  });
});




hazardousRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      hazardousDetailsDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      hazardousDetailsDiv.style.display = "none";
    }
  });
});


// Hide the textarea initially
ppeDiv.style.display = "none";

ppeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      ppeDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      ppeDiv.style.display = "none";
    }
  });
});

// Hide the textarea initially
disposalDiv.style.display = "none";

disposalRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      disposalDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      disposalDiv.style.display = "none";
    }
  });
});

// Hide the textarea initially
labTechDiv.style.display = "none";

labTechRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      labTechDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      labTechDiv.style.display = "none";
    }
  });
});



// Hide initially
afterHoursDiv.style.display = "none";

afterHoursRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      afterHoursDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      afterHoursDiv.style.display = "none";
    }
  });
});

// Hide initially
engagementDiv.style.display = "none";

engageRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "Yes" && radio.checked) {
      engagementDiv.style.display = "block";
    } else if (radio.value === "No" && radio.checked) {
      engagementDiv.style.display = "none";
    }
  });
});

function toggleSittingEquipmentDetails(show) {
  document.getElementById('sitting_equipment_details').style.display = show ? 'block' : 'none';
}

function toggleAcknowledgmentCheckbox(checkboxId, wrapperId, enable) {
  const checkbox = document.getElementById(checkboxId);
  const wrapper = document.getElementById(wrapperId);

  if (!checkbox || !wrapper) return;

  if (enable) {
    checkbox.disabled = false;
    checkbox.required = true;
    wrapper.classList.remove("disabled");
    wrapper.classList.remove("error");
  } else {
    checkbox.checked = false;
    checkbox.disabled = true;
    checkbox.required = false;
    wrapper.classList.add("disabled");
    wrapper.classList.remove("error");
  }
}

function handleShippingYes() {
  toggleShippingDetails(true);
  toggleAcknowledgmentCheckbox('hazardousAcknowledgment', 'hazardousAcknowledgmentGroup', true);
}

function handleShippingNo() {
  toggleShippingDetails(false);
  toggleAcknowledgmentCheckbox('hazardousAcknowledgment', 'hazardousAcknowledgmentGroup', false);
}


//Table function Definitions
//*******************************/

//Team Members Table
function addMemberRow() {
  const table = document.getElementById("membersTable").querySelector("tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" name="member_first[]" required></td>
    <td><input type="text" name="member_last[]" required></td>
    <td>
      <select name="member_gender[]" required>
        <option value="">-- Select --</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </td>
    <td>
      <select name="member_nationality[]" required>${countryOptions}</select>
    </td>
    <td>
      <select name="member_group[]" required>
        <option value="">--</option>
       ${[...Array(9)].map((_, i) => `<option value="${i + 1}">Group ${i + 1}</option>`).join("")}
      </select>
    </td>
  `;
  table.appendChild(row);
}

//Equipment list Table
function addEquipmentRow() {
  const tbody = document.getElementById("equipmentTable").querySelector("tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>
              <select name="equipment_type[]" required>
                <option value="">-- Select --</option>
                <option>16' Boat</option>
                <option>18' Boat</option>
                <option>ATVs</option>
                <option>Canoe</option>
                <option>Covered Trailers for ATV</option>
                <option>Electric Fences</option>
                <option>Flatbed Trailers</option>
                <option>Generators</option>
                <option>GPS receivers</option>
                <option>Ice Auger</option>
                <option>Inflatable Boat</option>
                <option>Satellite Communicator</option>
                <option>Satellite Phone</option>
                <option>Snowmobile</option>
                <option>Soil Auger</option>
                <option>Toboggan</option>
                <option>Camping Supplies</option>
                <option>Helmets</option>
                <option>Scuba Tank</option>
              </select>
            </td>
            <td><input type="number" name="equipment_quantity[]" min="1" required></td>
            <td>
              <select name="equipment_licensed[]" required>
                <option value="">--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
              </select>
            </td>
          `;
  tbody.appendChild(row);
}

//Arrival/Departure groups table
function generateGroupRows() {
  const count = parseInt(document.getElementById("groupCount").value, 10);
  const tbody = document.getElementById("groupsTable").querySelector("tbody");
  tbody.innerHTML = ""; // Clear any existing rows
  for (let i = 1; i <= count; i++) {
    addGroupRow(i);
  }
}

function addGroupRow(index = null) {
  const tbody = document.getElementById("groupsTable").querySelector("tbody");
  const currentCount = tbody.children.length + 1;
  const groupNum = index || currentCount;
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>Group ${groupNum}</td>
            <td><input type="date" name="arrival_${groupNum}" required></td>
            <td><input type="date" name="departure_${groupNum}" required></td>
            <td><input type="number" name="members_${groupNum}" min="1" required></td>
            <td>
              <select name="accommodation_${groupNum}" required>
                <option value="">--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
                </td>
                `;
  tbody.appendChild(row);
}

//Window.onload
//**************** */
// Run this function when the page finishes loading
window.onload = function () {
  // Load any previously saved form data (if returning to the form)
  loadProgress();

  // Generate or retrieve a unique Application ID to associate with this submission
  let appId = localStorage.getItem("applicationId");
  if (!appId) {
    appId = crypto.randomUUID(); // Generates a new unique ID
    localStorage.setItem("applicationId", appId);
  }

  // Set the Application ID field in the form
  document.getElementById("applicationId").value = appId;

  // Populate the country <select> options (defined in a separate countryOptions variable)
  document.getElementById("institutionCountry").innerHTML = countryOptions;

  // Attach a submit handler to the form
  document.getElementById("intakeForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);
    const data = {};

    // Convert FormData into a plain object (handles checkboxes and multiple entries)
    for (let [key, value] of formData.entries()) {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }

    // Collect group information into structured `arrival_groups` array
    const groupCount = parseInt(data.group_count || "0");
    data.arrival_groups = [];

    for (let i = 1; i <= groupCount; i++) {
      const group = {
        application_id: appId,
        id: i,
        arrival: data[`arrival_${i}`],
        departure: data[`departure_${i}`],
        members: data[`members_${i}`],
        accommodation: data[`accommodation_${i}`]
      };
      data.arrival_groups.push(group);
    }

    // Clean up redundant flat fields after packaging
    for (let i = 1; i <= groupCount; i++) {
      delete data[`arrival_${i}`];
      delete data[`departure_${i}`];
      delete data[`members_${i}`];
      delete data[`accommodation_${i}`];
    }

    // Prepare JSON string for submission and further processing
    const packagedJSON = JSON.stringify(data);

    // ✅ Log the data for testing and debugging purposes
    console.log("📦 Packaged Data:", data);

    // Initialize and send data using EmailJS
    emailjs.init("kUtUMk6RWW5wp5Q91"); // Your public EmailJS key
    emailjs.send("service_96vpr37", "template_sjldwde", {
      message: packagedJSON // Send as a raw JSON string
    })
      .then(function (response) {
        console.log("✅ Email sent!", response.status, response.text);
      }, function (error) {
        console.error("❌ Failed to send email:", error);
      });

    // Store packaged JSON in localStorage for retrieval (e.g. by download button)
    localStorage.setItem("researchIntakeSubmission", packagedJSON);

    // Hide the form and display a thank-you message
    form.style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Clear saved draft progress (clean slate for next session)
    localStorage.removeItem("researchIntakeDraft");
    localStorage.removeItem("currentSectionIndex");
  });
};

// Call on page load and when rows are dynamically added
window.addEventListener("load", updateDepartureConstraints);
const originalAddGroupRow = addGroupRow;
addGroupRow = function (index = null) {
  originalAddGroupRow(index);
  updateDepartureConstraints();
};

//Validation Function Defs and logic:
//************************* *********/
function setSectionValidation(sectionId, enable) {
  const inputs = document.querySelectorAll(`#${sectionId} input, #${sectionId} select, #${sectionId} textarea`);
  inputs.forEach(input => {
    if (!enable) {
      input.setAttribute("data-required", input.required);
      input.required = false;
    } else if (input.hasAttribute("data-required")) {
      input.required = input.getAttribute("data-required") === "true";
      input.removeAttribute("data-required");
    }
  });
}
// Section 5: Arrival/Departure date validation
function updateDepartureConstraints() {
  const tbody = document.getElementById("groupsTable").querySelector("tbody");
  const today = new Date().toISOString().split("T")[0];

  for (let row of tbody.rows) {
    const arrivalInput = row.cells[1].querySelector("input");
    const departureInput = row.cells[2].querySelector("input");

    if (arrivalInput) {
      arrivalInput.setAttribute("min", today);
      arrivalInput.addEventListener("change", function () {
        const arrivalDate = this.value;
        if (departureInput) {
          departureInput.setAttribute("min", arrivalDate);
        }
      });

      // Trigger the constraint update on load
      if (departureInput && arrivalInput.value) {
        departureInput.setAttribute("min", arrivalInput.value);
      }
    }
  }
}

//lab use end date can't be before lab use end date
startInput.addEventListener("change", () => {
  endInput.min = startInput.value; // Set the min value of end date
  if (endInput.value < startInput.value) {
    endInput.value = ""; // Clear end date if it's now invalid
  }
});

// Section 5: Arrival/Departure date validation
function updateDepartureConstraints() {
  const tbody = document.getElementById("groupsTable").querySelector("tbody");
  const today = new Date().toISOString().split("T")[0];

  for (let row of tbody.rows) {
    const arrivalInput = row.cells[1].querySelector("input");
    const departureInput = row.cells[2].querySelector("input");

    if (arrivalInput) {
      arrivalInput.setAttribute("min", today);
      arrivalInput.addEventListener("change", function () {
        const arrivalDate = this.value;
        if (departureInput) {
          departureInput.setAttribute("min", arrivalDate);
        }
      });

      // Trigger the constraint update on load
      if (departureInput && arrivalInput.value) {
        departureInput.setAttribute("min", arrivalInput.value);
      }
    }
  }
}

// Disassembly date must not be earlier than installation date
const installInput = document.getElementById("installationDate");
const disassemblyInput = document.getElementById("disassemblyDate");

installInput.addEventListener("change", () => {
  disassemblyInput.min = installInput.value;
  if (disassemblyInput.value < installInput.value) {
    disassemblyInput.value = ""; // Clear if disassembly is before install
  }
});

//Data & JSON formatting logic and function defs
//******************************************** */
// Handle special structures (team members, equipment, arrival groups)
if (data.team_members && Array.isArray(data.team_members)) {
  const teamTable = document.getElementById("summary-team-members");
  teamTable.innerHTML = "";
  data.team_members.filter(m => m.first_name || m.last_name || m.gender || m.nationality || m.member_group).forEach(member => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${member.first_name}</td><td>${member.last_name}</td><td>${member.gender}</td><td>${member.nationality}</td><td>${member.member_group || ""}</td>`;
    teamTable.appendChild(row);
  });
}

if (data.arrival_groups && Array.isArray(data.arrival_groups)) {
  const arrivalTable = document.getElementById("summary-arrival-groups");
  arrivalTable.innerHTML = "";
  data.arrival_groups.filter(g => g.arrival || g.departure || g.members || g.accommodation).forEach(group => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${group.id}</td><td>${group.arrival}</td><td>${group.departure}</td><td>${group.members}</td><td>${group.accommodation}</td>`;
    arrivalTable.appendChild(row);
  });
}

if (data.equipment && Array.isArray(data.equipment)) {
  const equipTable = document.getElementById("summary-equipment");
  equipTable.innerHTML = "";
  data.equipment.filter(e => e.type || e.quantity || e.licensed).forEach(equip => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${equip.type}</td><td>${equip.quantity}</td><td>${equip.licensed}</td>`;
    equipTable.appendChild(row);
  });
}

//Submission download
function downloadSubmission() {
  const packagedJSON = localStorage.getItem("researchIntakeSubmission");

  if (!packagedJSON) {
    alert("No submission data found. Please submit the form first.");
    return;
  }

  // Parse and pretty-print the JSON
  const data = JSON.parse(packagedJSON);
  const prettyJSON = JSON.stringify(data, null, 2);

  const blob = new Blob([prettyJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Research_Application_Data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert("Submission successful! JSON file downloaded.");
}








