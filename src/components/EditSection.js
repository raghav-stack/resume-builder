import React from 'react'
import '../App.css';

function EditSection() {

    const sections = {
        personalDetail: "Personal Details",
        summary: "Professional Summary",
        links: "Social Links",
        skills: "Skills",
        workExp: "Work Experience",
        education: "Education",
        languages: "Languages",
      };



  return (
    <div className='main'>
        <div className='left-part'>
            <h2>Personal Detail</h2>
            <div className="row">
                <div className="col">
                    <label htmlFor="job-title-input" className="form-label">wanted job title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id='job-title-input'
                        placeholder="job-title"  
                    />
                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">upload photo</label>
                        <input 
                            className="form-control" 
                            type="file" 
                            id="formFile" 
                        />
                    </div>
                </div>
            </div><br></br>
            <div className="row">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        id='first-name-input'
                        placeholder="first name"  
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        id='last-name-input'
                        placeholder="last name"  
                    />
                </div>
            </div><br></br>
            <div className="row">
                <div className="col">
                    <input 
                        type="email" 
                        className="form-control" 
                        id='email-input'
                        placeholder="email"  
                    />
                </div>
                <div className="col">
                    <input 
                        type="number" 
                        className="form-control" 
                        id='phone-input'
                        placeholder="phone"  
                    />
                </div>
            </div><br></br>
            <div className="row">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        id='country-input'
                        placeholder="country"  
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        id='city-input'
                        placeholder="city"  
                    />
                </div>
            </div><br></br>
            <div className="row">
                <div className="col">
                    <input 
                        type="text"
                        className="form-control" 
                        id='address-input'
                        placeholder="address"  
                    />
                </div>
                <div className="col">
                    <input 
                        type="number" 
                        className="form-control" 
                        id='code-input'
                        placeholder="zip-code"  
                    />
                </div>
            </div><br></br>

            <h2>Professional Summary</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">write your role, experience in short</label>
                <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3">
                </textarea>
            </div>

            <h3>Social Links</h3>
            <div className="mb-3">
                <label htmlFor="linkInput1" className="form-label">Link1</label>
                <input 
                    type="url" 
                    className="form-control" 
                    id="linkInput1" 
                    placeholder="Enter link" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="linkInput2" className="form-label">Link2</label>
                <input 
                    type="url" 
                    className="form-control" 
                    id="linkInput2" 
                    placeholder="Enter link" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="linkInput3" className="form-label">Link3</label>
                <input 
                    type="url" 
                    className="form-control" 
                    id="linkInput3" 
                    placeholder="Enter link" 
                />
            </div>

            <h3>Skills</h3>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="skillInput" 
                    placeholder="Enter skill" 
                />
                <br></br>
                <input 
                    type="range" 
                    className="form-range" 
                    id="customRange1" 
                />
            </div>
            <h3>Languages</h3>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="language-input" 
                    placeholder="" 
                />
            </div>

            <h3>Education</h3>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="university-input"  
                    placeholder="Enter university name" 
                />
            </div>
        </div>

        <div className='right-part'>
            <div className='right-nav'></div>
            <div className='right-main'>
                <div className='right-body'>
                    {Object.keys(sections).map((idx) => (
                        <div key={idx}>
                            {sections[idx]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default EditSection