### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
<!-- in the first line, val should be in brackets and closed up to func1 -->
<!-- i.e. def func1(val) -->
<!-- the = should be double -->
<!-- i.e. if val == 1 -->
def func1 val
  if val = 1
  return true
  else
  return false
  end
end

<!-- first line should read-->
<!-- def max(a, b) -->
<!-- def not dif; brackets round a and b and a comma in between them, closed up to max -->
<!-- and delete the extra end from the last line -->
dif max a b
  if a > b
      return a
  else
  b
  end
end
end


<!-- the range 1..10 should be in between brackets -->
<!-- i.e. for i in (1..10) -->
<!-- and the line return i needs to be inserted between the 2 ends -->
def looper
  for i in 1..10
  puts i
  end
end

failures = 0

<!-- there is an end missing from the end of the function -->
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1

<!-- this test would pass -->
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

<!-- this test would fail -->
<!-- typo - failrues, when it should be failures -->
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

<!-- this test would fail -->
<!-- it needs to say if failures > 0 -->
if failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end

```
