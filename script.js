
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const li = document.getElementById(item.category.toLowerCase());
      if (li) {
        
        li.querySelector('.bold-senses').textContent = item.score;
        
        li.querySelector('img').src = item.icon;
        li.querySelector('img').alt = `${item.category} icon`;
        li.querySelector('.senses-content span').textContent = item.category;
        const total = data.reduce((sum, item) => sum + item.score, 0)
        const average = Math.round(total / data.length);
        document.querySelector('.score-circle-strong').textContent = average;
      }
    });
  })
  .catch(err => console.error('Erro ao carregar dados:', err));
