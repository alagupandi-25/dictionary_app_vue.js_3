<template>
	<div>
		<div id="main">
			<div class="fof">
				<h1>Page Not Found(Error 404)</h1>
			</div>
		</div>
		<div class="container">
			<div class="center">
			<button class="btn">
				<svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
				<polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
				<polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
				</svg>
				<a>Return To Home</a>
			</button>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
    name: "Notfound",
}
</script>

<style scoped>

*{
    transition: all 0.6s;
}

#main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
    color: aliceblue;
}

.fof{
	  display: table-cell;
	  vertical-align: middle;
}

.fof h1{
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}
.container {
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
}

.center {
  width: 180px;
  height: 60px;
  position: absolute;
}

.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #dfd9e2;
  outline: none;
  transition: 1s ease-in-out;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: #fff;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn:hover {
  transition: 1s ease-in-out;
  background: #454345;
}

.btn:hover svg {
  stroke-dashoffset: -480;
}

.btn a {
  color: white;
  font-size: 18px;
  font-weight: 100;
  text-decoration: none;
}
</style>

