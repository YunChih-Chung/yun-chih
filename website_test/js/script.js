// 切換顯示/隱藏表格
function toggleTable() {
    const table = document.getElementById('competitionTable');
    table.style.display = table.style.display === 'none' ? 'table' : 'none';
  }
// 遍歷所有摺頁標題，並添加點擊事件
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
      const parent = this.parentElement; // 獲取摺頁項目
      const content = parent.querySelector('.accordion-content'); // 獲取該摺頁的內容
      
      // 先關閉其他摺頁
      const allItems = document.querySelectorAll('.accordion-item');
      allItems.forEach(item => {
          if (item !== parent && item.classList.contains('active')) {
              item.classList.remove('active');
              const itemContent = item.querySelector('.accordion-content');
              itemContent.style.maxHeight = '0px';
              itemContent.style.opacity = '0';  // 隱藏內容
              itemContent.style.display = 'none';
          }
      });

      // 判斷該摺頁是否已經開啟
      if (parent.classList.contains('active')) {
          parent.classList.remove('active'); // 關閉該摺頁
          content.style.maxHeight = '0px'; // 讓內容的高度為0
          content.style.opacity = '0'; // 隱藏內容
          content.style.display = 'none'; // 隱藏內容
      } 
      else {
          parent.classList.add('active'); // 開啟該摺頁
          content.style.display = 'flex'; // 顯示內容
          content.style.opacity = '1';  // 顯示內容
          setTimeout(() => {
              content.style.maxHeight = content.scrollHeight + 'px'; // 設置內容的最大高度，讓其顯示出來
          }); // 當內容顯示後，設置高度
      }
  });
});
