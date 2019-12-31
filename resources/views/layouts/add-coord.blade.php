@if($qtd_imgs == 1)
  <img src="../img/{{$andar}}/{{$local}}-lampada.svg" data-target="lampada" class="img-lampada">

@else
  <img src="../img/{{$andar}}/{{$local}}-lampada.svg" data-target="lampada" class="img-lampada">
  <img src="../img/{{$andar}}/{{$local}}-arcondicionado.svg" data-target="arcondicionado" class="img-arcondicionado">
@endif

@for($i = 1; $i <= $qtd_lampadas; $i++)
  @include("layouts.mostra-lampada", ["lampadas" => "lampadas".$i])
@endfor

@for($j = 1; $j <= $qtd_arcondicionados; $j++)
  @include("layouts.mostra-arcondicionado", ["arcondicionado" => "arcondicionado".$j])
@endfor