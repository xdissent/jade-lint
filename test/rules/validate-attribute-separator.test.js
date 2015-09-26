module.exports = createTest

var assert = require('assert')

function createTest(linter, fixturesPath) {

  var fixturePath = fixturesPath + 'validate-attribute-separator.jade'

  describe('validateAttributeSeparator', function () {

    describe('space', function () {

      before(function () {
        linter.configure({ validateAttributeSeparator: ' ' })
      })

      it('should report invalid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\'  name=\'name\'  value=\'value\')').length, 1)
      })

      it('should not report valid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\' name=\'name\' value=\'value\')').length, 0)
      })

      it('should report multiple errors found in file', function () {
        var result = linter.checkFile(fixturePath)

        assert.equal(result.length, 9)
        assert.equal(result[0].code, 'JADE:LINT_VALIDATEATTRIBUTESEPARATOR')
      })

    })

    describe('comma', function () {

      before(function () {
        linter.configure({ validateAttributeSeparator: ',' })
      })

      it('should report invalid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\' name=\'name\' value=\'value\')').length, 1)
      })

      it('should not report valid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\',name=\'name\',value=\'value\')').length, 0)
      })

      it('should report multiple errors found in file', function () {
        var result = linter.checkFile(fixturePath)

        assert.equal(result.length, 10)
        assert.equal(result[0].code, 'JADE:LINT_VALIDATEATTRIBUTESEPARATOR')
      })

    })

    describe('comma-space', function () {

      before(function () {
        linter.configure({ validateAttributeSeparator: ', ' })
      })

      it('should report invalid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\' name=\'name\' value=\'value\')').length, 1)
      })

      it('should not report valid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\', name=\'name\', value=\'value\')').length, 0)
      })

      it('should report multiple errors found in file', function () {
        var result = linter.checkFile(fixturePath)

        assert.equal(result.length, 10)
        assert.equal(result[0].code, 'JADE:LINT_VALIDATEATTRIBUTESEPARATOR')
      })

    })

    describe('space-comma', function () {

      before(function () {
        linter.configure({ validateAttributeSeparator: ' ,' })
      })

      it('should report invalid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\', name=\'name\', value=\'value\')').length, 1)
      })

      it('should not report valid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\' ,name=\'name\' ,value=\'value\')').length, 0)
      })

      it('should report multiple errors found in file', function () {
        var result = linter.checkFile(fixturePath)

        assert.equal(result.length, 10)
        assert.equal(result[0].code, 'JADE:LINT_VALIDATEATTRIBUTESEPARATOR')
      })

    })

    describe('space-comma-space', function () {

      before(function () {
        linter.configure({ validateAttributeSeparator: ' , ' })
      })

      it('should report invalid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\' name=\'name\' value=\'value\')').length, 1)
      })

      it('should not report valid attribute separator', function () {
        assert.equal(linter.checkString('input(type=\'text\' , name=\'name\' , value=\'value\')').length, 0)
      })

      it('should report multiple errors found in file', function () {
        var result = linter.checkFile(fixturePath)

        assert.equal(result.length, 10)
        assert.equal(result[0].code, 'JADE:LINT_VALIDATEATTRIBUTESEPARATOR')
      })

    })

  })

}
