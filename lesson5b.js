//準備計算所有檔案的平均計算
var fs=reqire("fs")
var lst=fs.readfileSync("/data/data.lst","utf-8").split(/\r?\n/)
