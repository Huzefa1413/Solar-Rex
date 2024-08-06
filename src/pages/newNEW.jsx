import React from 'react';

function Newne() {
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '20%',
      backgroundColor: '#f3f2f7',
      padding: '20px',
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profileImage: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    content: {
      width: '80%',
      backgroundColor: '#fff',
      padding: '20px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    headerItem: {
      backgroundColor: '#eaf4fe',
      padding: '10px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      color: '#000',
    },
    energyMeter: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    consumptionChart: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    activeMenuItem: {
      backgroundColor: '#eaf4fe',
    },
    icon: {
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={{ color: '#8a2be2' }}>SOLAR-REX</h2>
        <div style={styles.menuItem}>
          <div style={{ ...styles.icon, ...styles.activeMenuItem }}>&#9632;</div>
          <div>Dashboard</div>
        </div>
        <div style={styles.menuItem}>
          <div style={styles.icon}>&#9474;</div>
          <div>Transaction table</div>
        </div>
        <div style={styles.menuItem}>
          <div style={styles.icon}>&#9889;</div>
          <div>Energy</div>
        </div>
        <div style={styles.profile}>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            style={styles.profileImage}
          />
          <div>saim</div>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.header}>
          <div style={styles.headerItem}>
            <div>ENERGY CONSUMED TODAY</div>
            <div>0.00 kWh</div>
          </div>
          <div style={styles.headerItem}>
            <div>ENERGY CONSUMED THIS WEEK</div>
            <div>0.00 kWh</div>
          </div>
          <div style={styles.headerItem}>
            <div>ENERGY CONSUMED THIS MONTH</div>
            <div>13.74 kWh</div>
          </div>
          <div style={styles.headerItem}>
            <div>ENERGY CONSUMED THIS YEAR</div>
            <div>13.74 kWh</div>
          </div>
        </div>
        <div style={styles.energyMeter}>
          <h3>Energy Meter</h3>
          <div>
            <div>Energy Left: 1186.26 kWh</div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '10px solid #eaf4fe',
                  display: 'inline-block',
                  lineHeight: '80px',
                  color: '#8a2be2',
                }}
              >
                100.00%
              </div>
            </div>
          </div>
        </div>
        <div style={styles.consumptionChart}>
          <h3>This Month's Consumption</h3>
          <img src="https://via.placeholder.com/600x200" alt="Chart" />
        </div>
      </div>
    </div>
  );
}

export default Newne;
