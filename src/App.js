
import { useState } from 'react';
import './App.css';

function App() {

  const initial = {
			prefix: "Mr.",
			fullName: "",
			number: "",
			addressLin1: "",
			addressLin2: "",
			addressLin3: "",
			town: "",
			city: "",
			postCode: "",
			country: "",
			customerType: "New",
			sourceLeads: "",
			comments: "",
		};

  const [form, setForm] = useState(initial);

    const formHandler = (e) => {
							e.preventDefault();
              if(form.number.length===10 )
                  {console.log(form)
							    setForm(initial);}
              else{
                alert("Invalid No.")
              }
						
    }

  return (
			<div className="App">
				<form onSubmit={formHandler} >
					<div>
						<label>
							Prefix
							<br />
							<select
								onChange={(e) => setForm({ ...form, prefix: e.target.value })}
								value={form.prefix}
							>
								<option vaue="Mr.">Mr.</option>
								<option vaue="Mrs.">Mrs.</option>
							</select>
						</label>
					</div>
					<div>
						<label>
							Full Name
							<br />{" "}
							<input
								onChange={(e) => setForm({ ...form, fullName: e.target.value.replace(/[0-9]/g,'') })}
								type="text"
								required
								value={form.fullName}
							></input>
						</label>
					</div>
					<div>
						<label>
							Mobile Number <br />
							<input
								type="number"
								pattern="[0-9]*"
								onChange={(e) => {
									  return setForm({ ...form, number: e.target.value })
								}}
								required
								value={form.number}
							></input>
						</label>
					</div>
					<div>
						<label>
							Address Line 1 <br />
							<input
								type="text"
								onChange={(e) =>
									setForm({
										...form,
										addressLin1: e.target.value,
									})
								}
								required
								value={form.addressLin1}
							></input>
						</label>
					</div>
					<div>
						<label>
							Address Line 2 <br />
							<input
								type="text"
								onChange={(e) =>
									setForm({
										...form,
										addressLin2: e.target.value,
									})
								}
								required
								value={form.addressLin2}
							></input>
						</label>
					</div>
					<div>
						<label>
							Address Line 3 <br />
							<input
								type="text"
								onChange={(e) =>
									setForm({
										...form,
										addressLin3: e.target.value,
									})
								}
								required
								value={form.addressLin3}
							></input>
						</label>
					</div>
					<div>
						<label>
							Town
							<br />
							<input
								type="text"
								required
								onChange={(e) => setForm({ ...form, town: e.target.value })}
								value={form.town}
							></input>
						</label>
					</div>
					<div>
						<label>
							City
							<br />
							<input
								type="text"
								onChange={(e) => setForm({ ...form, city: e.target.value })}
								required
								value={form.city}
							></input>
						</label>
					</div>
					<div>
						<label>
							Post Code <br />
							<input
								type="number"
								pattern="[0-9]*"
								onChange={(e) => setForm({ ...form, postCode: e.target.value })}
								value={form.postCode}
								required
							></input>
						</label>
					</div>
					<div>
						<label>
							Country <br />
							<input
								type="text"
								onChange={(e) => setForm({ ...form, country: e.target.value })}
								required
								value={form.country}
							></input>
						</label>
					</div>
					<div>
						<label>
							Customer Type
							<br />
							<select
								onChange={(e) => setForm({ ...form, customerType: e.target.value })}
								value={form.prefix}
							>
								<option value="New">New</option>
								<option value="Old">Old</option>
							</select>
						</label>
					</div>
					<div>
						<label>
							Source Leads
							<br />{" "}
							<input
								type="text"
								onChange={(e) => setForm({ ...form, sourceLeads: e.target.value })}
								required
								value={form.sourceLeads}
							></input>
						</label>
					</div>
					<div>
						<label>
							Comments
							<br />{" "}
							<input
								type="text"
								required
								value={form.comments}
								onChange={(e) => setForm({ ...form, comments: e.target.value })}
							></input>
						</label>
					</div>
					<input id="button" type="submit" value="Submit"></input>
				</form>
			</div>
		);
}

export default App;
