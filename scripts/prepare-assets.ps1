$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$destination = Join-Path $PSScriptRoot '..\assets\images'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
$game = 'C:\Users\wille\Desktop\VG BakUP\pyro-pete-new-game'
$website = 'C:\Users\wille\Documents\GitHub\northernflightsdiscgolf'
$sources = @{
 'caboom.jpg' = "$game\assets\backgrounds\bg_titlescreen.png"
 'caboom-gameplay.jpg' = "$game\build\sprite-clarity-screenshots\clarity_gameplay_all_after.png"
 'caboom-characters.jpg' = "$game\build\orientation-screenshots\orientation_characters.png"
 'caboom-logo.png' = "$game\assets\sprites\processed\caboom_logo.png"
 'chains.jpg' = "$website\static\Photos\VideoGame\game_chains.png"
 'discmon.jpg' = "$website\static\Photos\VideoGame\game_discmon.png"
 'cribbage.jpg' = "$website\static\Photos\VideoGame\game_cribbage.png"
 'carts.jpg' = 'C:\Users\wille\Desktop\carts-of-choas\assets\images\carts_of_chaos_title_screen.png'
 'nfdg-logo.png' = "$website\static\Photos\offical NFDG logo.png"
}
foreach ($entry in $sources.GetEnumerator()) {
 $source = [System.Drawing.Image]::FromFile($entry.Value)
 $limit = if ($entry.Key -eq 'nfdg-logo.png') {320} elseif ($entry.Key -eq 'caboom.jpg') {1440} else {1100}
 $ratio = [Math]::Min([double]1, ([double]$limit / $source.Width))
 $width = [Math]::Max(1,[int]($source.Width*$ratio))
 $height = [Math]::Max(1,[int]($source.Height*$ratio))
 Write-Output "$($entry.Key): $($source.Width)x$($source.Height) to ${width}x${height}"
 $bitmap = [System.Drawing.Bitmap]::new($width,$height)
 $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
 $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
 $graphics.DrawImage($source,0,0,$bitmap.Width,$bitmap.Height)
 $target = Join-Path $destination $entry.Key
 if ($entry.Key.EndsWith('.jpg')) {
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
  $parameters = New-Object System.Drawing.Imaging.EncoderParameters 1
  $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality),([long]85)
  $bitmap.Save($target,$codec,$parameters)
  $parameters.Dispose()
 } else { $bitmap.Save($target,[System.Drawing.Imaging.ImageFormat]::Png) }
 $graphics.Dispose(); $bitmap.Dispose(); $source.Dispose()
}
Write-Output 'Prepared 9 optimized artwork copies; source artwork unchanged.'
