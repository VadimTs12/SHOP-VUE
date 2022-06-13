<template>
  <section class="section section__categories">
    <div class="_container">
      <div class="section__content">
        <div class="for-whom-list row">
          <a class="col-md-4 col-sm-12 mb-4 " href="#">
            <div class="for-whom-item">

              <div class="for-whom-item-content">
                <p>30% OFF<br><span>FOR WOMEN</span></p>

              </div>
            </div>
          </a>
          <a class="col-md-4 col-sm-12 mb-4 " href="#">
            <div class="for-whom-item">
              <div class="for-whom-item-content">
                <p>HOT DEAL<br> <span>FOR MEN</span></p>
              </div>
            </div>
          </a>
          <a class=" col-md-4 col-sm-12 mb-4 " href="#">
            <div class="for-whom-item">
              <div class="for-whom-item-content">
                <p>NEW ARRIVALS <br><span>FOR KIDS</span></p>
              </div>
            </div>
          </a>
        </div>
        <a class="accesories g-2" href="#">
          <div class="accesories-content">
            <p>LUXIROUS & TRENDY
              <span>ACCESORIES</span></p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" >
.section__categories {
  padding: 65px 0;
.section__content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.for-whom-list {

a:nth-of-type(1)  .for-whom-item{
  background: url(../assets/img/for-women.png) no-repeat top center / cover;
}
a:nth-of-type(2) .for-whom-item {
  background: url(../assets/img/for-men.png) no-repeat top center / cover;
}
a:nth-of-type(3)  .for-whom-item{
  background: url(../assets/img/for-kids.png) no-repeat top center / cover;
}
}

.for-whom-item {
  height: 260px;
  position: relative;
@media (max-width:768px) {

}
}

.for-whom-item-content {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(33, 22, 22, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  text-align: center;
p {
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
span {
  color: #f16d7f;
  font-size: 26px;
}
}
}
.for-whom-item-content:hover {
  background: rgba(33, 22, 22, 0.966);
  transition: 0.5s;
}
.accesories {
  background: url(../assets/img/accesories.png) no-repeat top center / cover;
  position: relative;
  width: 100%;
  height: 260px;
.accesories-content {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(33, 22, 22, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  text-align: center;
p {
  font-size: 16px;
  line-height: 1.1;
  text-align: center;
  color: #ffffff;
span {
  color: #f16d7f;
  font-size: 26px;
}
}
}
}
.accesories-content:hover {
  background: rgba(33, 22, 22, 0.966);
  transition: 0.5s;
}
}

</style>