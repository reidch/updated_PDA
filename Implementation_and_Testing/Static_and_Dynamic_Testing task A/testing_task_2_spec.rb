require 'minitest/autorun'
require 'minitest/rg'

require_relative './testing_task_2'

class TestTask < MiniTest::Test

	def test_func1()
		assert_equal(true, func1(1))
		assert_equal(false, func1(6))
	end

	def test_max()
		assert_equal(4, max(4, 3))
		assert_equal(6, max(5, 6))
	end

	def test_looper()
		assert_equal(10, looper())
	end

end
