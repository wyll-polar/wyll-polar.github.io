
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
// Section navigation
//-------------------------------------------------------------------------
const steps = Array.from(document.querySelectorAll("form .step"));
//console.log(steps);

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

function validateStep(){
  const active = document.querySelector(".active");
  const fields=active.querySelectorAll("input, radio, checkbox, text, textarea, select");
  return [...fields].every((field) => field.reportValidity());
}
nextBtn.forEach((button) => {
  const applicant_type = new FormData(form).get('applicant_type');
  console.log(applicant_type);
  console.log("the test code has run");
  button.addEventListener("click", () => {
    if (!validateStep()) return;
    changeStep("next");
    updateProgressBar();
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
    updateProgressBar();
  });
});

function populate(dropdown_id){
  if (dropdown_id === "institutionCountry"){
    document.getElementById('institutionCountry').innerHTML = countryOptions;
  }

  applyTranslations(document.getElementById("languageSwitcher").value);
}

function updateProgressBar(){
  const active = document.querySelector(".active");
  index=steps.indexOf(active);
  document.getElementById('progressBar').style.width = ((index + 1) / steps.length * 100) + '%';
}
//----------------------------------------------------------------------------------

// 1) Country options HTML
const countryOptions = `
    <option value="" data-i18n-key="ph.select"></option>
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



// 2) Form progress helpers
function saveProgress() {
  const form = document.getElementById('intakeForm');
  const values = {};

  // Only text inputs and textareas
  const fields = form.querySelectorAll('input[type="text"][name], textarea[name]');

  fields.forEach(el => {
    const key = el.name;
    const val = el.value;

    if (values[key] === undefined) {
      values[key] = val;
    } else if (Array.isArray(values[key])) {
      values[key].push(val);
    } else {
      values[key] = [values[key], val];
    }
  });

  localStorage.setItem('researchIntakeDraft', JSON.stringify(values));
  localStorage.setItem('currentSectionIndex', String(index));
}

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
    steps[0].classList.remove("active");
    steps[index].classList.add("active");
  }
  
  updateDepartureConstraints();
}

//Date handling
 //date handler
function today_is_min_date(){
  today=new Date().toISOString().split("T")[0];
  return today;
}


function updateDepartureConstraints() {
  const tbody = document.getElementById('groupsTable').querySelector('tbody');
  for (let row of tbody.rows) {
    const arrival = row.cells[1].querySelector('input');
    const departure = row.cells[2].querySelector('input');
    if (arrival) {
      arrival.addEventListener('change', () => {
        if (departure) departure.min = arrival.value;
      });
      if (departure && arrival.value) {
        departure.min = arrival.value;
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

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.dataset.i18nKey;
    const text = window.i18n[lang]?.[key];
    if (!text) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (el.tagName === 'OPTION') {
      el.textContent = text;
    } else {
      el.textContent = text;
    }
  });
}

function get_inputs(div_id){
  const inputs = document.querySelectorAll(`#${div_id} input, #${div_id} textarea`);
  return inputs
}

function set_required(inputs){
   inputs.forEach(input => {
      input.required = true;
    });
}

function unset_required(inputs){
  inputs.forEach(input => {
      input.required = "";
      input.value = '';
    });
}

// 5) Toggle helpers

function toggle(show, div_id){
  const inputs=get_inputs(div_id);
  if (show){
    document.getElementById(div_id).style.display = 'block';
    //special cases
    if(div_id=='personnelSupportSection' && show){return;}
    if(div_id=='labSelection' && show){
      unset_required(inputs);
      return;
    }

    set_required(inputs);
  }
  else{
    document.getElementById(div_id).style.display = 'none'; 
    unset_required(inputs);
  }   
}

const startInput = document.getElementById("labUseStart");
const endInput = document.getElementById("labUseEnd");

//lab use end date can't be before lab use end date
startInput.addEventListener("change", () => {
  endInput.min = startInput.value; // Set the min value of end date
  if (endInput.value < startInput.value) {
    endInput.value = ""; // Clear end date if it's now invalid
  }
});



// 6) Word counter validation
function countWords(textarea, counterId) {
  const text = textarea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const limit = parseInt(counterId.includes('summary') ? 200 : 150, 10);
  const counter = document.getElementById(counterId);
  counter.textContent = `${words} / ${limit}`;
  textarea.setCustomValidity(words > limit ? `Please limit to ${limit} words.` : '');
}

// 7) Dynamic row functions
function addMemberRow() {
  const table = document.getElementById("membersTable").querySelector("tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" name="member_first[]" required></td>
    <td><input type="text" name="member_last[]" required></td>
    <td>
      <select name="member_gender[]" required>
        <option value="" data-i18n-key="ph.select"></option>
        <option data-i18n-key="opt.male"></option>
        <option data-i18n-key="opt.fem"></option>
        <option data-i18n-key="label.type_other"></option>
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
  applyTranslations(document.getElementById("languageSwitcher").value);

}
//Equipment list Table
function addEquipmentRow() {
  const tbody = document.getElementById("equipmentTable").querySelector("tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>
              <select name="equipment_type[]" required>
                <option value="" data-i18n-key="ph.select"></option>
                <option data-i18n-key="opt.16_boat"></option>
                <option data-i18n-key="opt.18_boat"></option>
                <option data-i18n-key="opt.atv"></option>
                <option data-i18n-key="opt.canoe"></option>
                <option data-i18n-key="opt.covered_trailer"></option>
                <option data-i18n-key="opt.electric_fence"></option>
                <option data-i18n-key="opt.flatbed_trailer"></option>
                <option data-i18n-key="opt.generator"></option>
                <option data-i18n-key="opt.gps"></option>
                <option data-i18n-key="opt.auger"></option>
                <option data-i18n-key="opt.inflatable_boat"></option>
                <option data-i18n-key="opt.sat_comm"></option>
                <option data-i18n-key="opt.sat_phone"></option>
                <option data-i18n-key="opt.snowmobile"></option>
                <option data-i18n-key="opt.soil_auger"></option>
                <option data-i18n-key="opt.toboggan"></option>
                <option data-i18n-key="opt.camping"></option>
                <option data-i18n-key="opt.helmet"></option>
                <option data-i18n-key="opt.scuba"></option>
              </select>
            </td>
            <td><input type="number" name="equipment_quantity[]" min="1" required></td>
            <td>
              <select name="equipment_licensed[]" required>
                <option value="">--</option>
                <option value="Yes" data-i18n-key="option.yes"></option>
                <option value="No" data-i18n-key="option.no"></option>
                <option value="Not Applicable" data-i18n-key="opt.na"></option>
              </select>
            </td>
          `;
  tbody.appendChild(row);
  applyTranslations(document.getElementById("languageSwitcher").value);
}

//Arrival/Departure groups table
function generateGroupRows() {
  const count = parseInt(document.getElementById("groupCount").value, 10);
  const tbody = document.getElementById("groupsTable").querySelector("tbody");
  tbody.innerHTML = ""; // Clear any existing rows
  for (let i = 1; i <= count; i++) {
    addGroupRow(i);
  }

  updateDepartureConstraints();
  applyTranslations(document.getElementById("languageSwitcher").value);
}

function addGroupRow(index = null) {
  const tbody = document.getElementById("groupsTable").querySelector("tbody");
  const currentCount = tbody.children.length + 1;
  const groupNum = index || currentCount;
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>Group ${groupNum}</td>
            <td><input id="adate" min=${today_is_min_date()} type="date" name="arrival_${groupNum}" required></td>
            <td><input id="ddate" type="date" name="departure_${groupNum}" required></td>
            <td><input type="number" name="members_${groupNum}" min="1" required></td>
            <td>
              <select name="accommodation_${groupNum}" required>
                <option value="">--</option>
                <option value="Yes" data-i18n-key="option.yes"></option>
                <option value="No" data-i18n-key="option.no"></option>
                </select>
                </td>
                `;
  tbody.appendChild(row);
  applyTranslations(document.getElementById("languageSwitcher").value);
  updateDepartureConstraints();
}

// 8) Download submission helper
function downloadSubmission() {
  const packaged = localStorage.getItem('researchIntakeSubmission');
  if (!packaged) return alert('No submission data found.');
  const data = JSON.parse(packaged);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'Research_Application_Data.json';
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  alert('Submission successful! JSON downloaded.');
}


// ---------------------------
// SECTION B: BOOTSTRAP (DOMContentLoaded)
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 0) EmailJS init
  if (window.emailjs && typeof emailjs.init === 'function') {
    emailjs.init('kUtUMk6RWW5wp5Q91');
  }

  // 1) Language switcher
  const switcher = document.getElementById('languageSwitcher');
  if (switcher) {
    const lang = localStorage.getItem('lang') || 'en';
    switcher.value = lang;
    applyTranslations(lang);
    switcher.addEventListener('change', e => {
      localStorage.setItem('lang', e.target.value);
      applyTranslations(e.target.value);
    });
  }

  // 2) Load saved progress & set Application ID
  //loadProgress();
  applyTranslations(document.getElementById("languageSwitcher").value);
  const appId = localStorage.getItem('applicationId') || crypto.randomUUID();
  localStorage.setItem('applicationId', appId);
  document.getElementById('applicationId').value = appId;

  // 3) Populate country dropdown
  populate('institutionCountry');

  updateProgressBar();

  // 4) Form submission handler
  document.getElementById('intakeForm').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let [k, v] of formData.entries()) {
      if (data[k]) {
        if (!Array.isArray(data[k])) data[k] = [data[k]];
        data[k].push(v);
      } else data[k] = v;
    }
    // arrival_groups packaging
    const count = parseInt(data.group_count || '0', 10);
    data.arrival_groups = [];
    for (let i = 1; i <= count; i++) {
      data.arrival_groups.push({
        application_id: appId,
        id: i,
        arrival: data[`arrival_${i}`],
        departure: data[`departure_${i}`],
        members: data[`members_${i}`],
        accommodation: data[`accommodation_${i}`]
      });
      delete data[`arrival_${i}`]; delete data[`departure_${i}`]; delete data[`members_${i}`]; delete data[`accommodation_${i}`];
    }

    // 6) Send JSON via EmailJS
    const packagedJSON = JSON.stringify(data);
    console.log('📦 Packaged Data:', data);
    emailjs.send('service_96vpr37', 'template_sjldwde', { message: packagedJSON });

    // 7) Store & UI update
    localStorage.setItem('researchIntakeSubmission', packagedJSON);
    form.style.display = 'none';
    changeStep("next");
    localStorage.removeItem('researchIntakeDraft');
    localStorage.removeItem('currentSectionIndex');
  });


  // 9) Download button
  document.getElementById('downloadJson')?.addEventListener('click', downloadSubmission);

  //date handlers
  installInput.min=today_is_min_date();
  startInput.min=today_is_min_date();
 
});
