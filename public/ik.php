<?php require 'init.php'; ?>
<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marmaris MAkina</title>
    <?php include 'include/head.html'; ?>
</head>

<body>
    <?php include 'include/header.html'; ?>
    <main>
        <section class="page-banner">
            <div class="row">
                <div class="col-lg-6 px-0 mx-0">
                    <img src="./assets/images/haber-1.webp" />
                </div>
                <div class="col-lg-5 px-5 d-flex align-items-center justify-content-center mx-auto">
                    <div class="banner-content">
                        <h1 class="banner-title">İnsan Kaynakları</h1>
                        <p class="banner-text">Hangi sektörde olursanız olsun, ekipmanınız ne kadar uzman olursa olsun, Shell'in ürünleri ve hizmetleri çalışmanıza değer katmak için tasarlanmıştır. Madeni yağlar ile ilgili hizmet paketimiz, size uzman bilgiler sunar, pratik araç ve eğitimler ile destek sağlar.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="company-ik-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 pe-md-5 text-content">
                        <p>
                            İnsan Kaynakları Politikamız: Gelişen ve değişen rekabet koşulları altında, asıl gücün sahip olduğumuz insan kaynağı olduğunun bilinciyle, yetkin insan kaynağını şirketimizle buluşturacak, çalışanlarımızın yüksek performans sergilemelerini ve sürekli gelişimlerini sağlayacak insan kaynakları uygulamaları geliştirmektir. Hedefimiz, sahip olduğumuz katma değer üreten, sorumluluk sahibi, özgüvenli, yeniliklere açık, çevreye duyarlı ve kaliteli insan kaynağımızı geliştirmek ve yenilerini bünyemize katmaktır.
                        </p>
                        <p>
                            Açık ve dürüst iletişime dayalı, yeni ve yaratıcı fikirlerin desteklendiği bir ortamda çalışmak,

                        <p>Profesyonel ve çağdaş yönetim anlayışına sahip kurumsal bir yapıda yer almak,</p>

                        <p><i>Sürekli öğrenmeye açık olup sürekli gelişmek ve sağlam bir kariyer elde etmek istiyorsanız
                                Marmaris Makina sizin için doğru bir seçim olacaktır.
                            </i></p>
                    </div>
                    <div class="col-lg-4 offset-lg-1">
                        <div class="form-area">
                            <h2>Formu Doldur</h2>
                            <form method="POST" action="">
                                <div class="form-floating mb-1">
                                    <input type="text" class="form-control" id="floatingInput1" placeholder="Adınız Soyadınız" required>
                                    <label for="floatingInput1">Adınız Soyadınız</label>
                                </div>
                                <div class="form-floating mb-1">
                                    <input type="email" class="form-control" id="floatingInput2" placeholder="E-Posta Adresiniz" required>
                                    <label for="floatingInput2">E-Posta</label>
                                </div>
                                <div class="form-floating mb-1">
                                    <input type="tel" class="form-control" id="floatingInput3" placeholder="05xx xxx xxxx" required>
                                    <label for="floatingInput3">Telefon</label>
                                </div>
                                <div class="form-row mt-3 mb-1">
                                    <label for="floatingInput">Cvniz</label>
                                    <input type="file" class="form-control" id="floatingInput" required>
                                </div>
                                <button type="submit" class="btn btn-outline-dark">
                                    Gönder
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'include/footer.html'; ?>
</body>

</html>