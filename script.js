// ダークモードとライトモードの切り替え
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    const logo = document.getElementById('logo'); // 画像要素

    // 初期状態はライトモード
    body.classList.add('light-mode');
    logo.src = 'img/name_light.png'; // 初期状態の画像

    toggleButton.addEventListener('click', () => {
        // ライトモードとダークモードの切り替え
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        const body = document.body; // bodyを取得
        const logo = document.getElementById('logo'); // logoを取得

        // モードに応じて画像を切り替え
        if (body.classList.contains('dark-mode')) {
            logo.src = 'img/name_dark.png'; // ダークモード用の画像
        } else {
            logo.src = 'img/name_light.png'; // ライトモード用の画像
        }
        document.getElementById('toggle-mode').addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            // 上記のコードをここに移動
        });
        

        // ボタンのアイコンをモードに応じて変更
        const icon = body.classList.contains('dark-mode') ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
        toggleButton.innerHTML = icon;
    });
});


// スクロールに慣性を追加（iOS風のスムーススクロール）
document.documentElement.style.scrollBehavior = 'smooth';

// 浮遊感アニメーション（ホバー時）
const hoverItems = document.querySelectorAll('#projects li, #about li');

hoverItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.transition = 'transform 0.3s';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
    });
});
