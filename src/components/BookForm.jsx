import React from 'react'

function BookForm() {
  return (
    <div>
      <div className="card hero-card w-100 p-2 border-0">
                    <div>
      <ul className="nav nav-tabs justify-content-between">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => handleTabChange(1)}
          >
            <i class="bi bi-taxi-front-fill"></i> Local taxi
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => handleTabChange(2)}
          >
          <i class="bi bi-buildings-fill"></i> Oustation
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => handleTabChange(3)}
          >
            <i class="bi bi-airplane-fill"></i> Airport
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}
          id="tab1"
        >
         <LocalTaxi/>
        </div>
        <div
          className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}
          id="tab2"
        >
          Content for Tab 2
        </div>
        <div
          className={`tab-pane ${activeTab === 3 ? 'active' : ''}`}
          id="tab3"
        >
          Content for Tab 3
        </div>
      </div>
    </div> 
                    </div>
    </div>
  )
}

export default BookForm
