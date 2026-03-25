function Menu({ canviarTasca }) {
  
    const menuItems = ['tasca 1.1', 'tasca 1.2', 'tasca 1.3', 'tasca 1.4', 'tasca 2.1', 'tasca 2.2', 'tasca 3']

    function onClickMenuItem(item) {
      canviarTasca(item)
    }

  return (
    <div style={{position: 'absolute', top: 20, justifyContent: 'center', display: 'flex', gap: '10px', right: 0, left: 0}}>
        {menuItems.map((item) => {
          return <button key={item} onClick={() => onClickMenuItem(item)}>{item}</button>
    })}
    </div>
  )
}

export default Menu
