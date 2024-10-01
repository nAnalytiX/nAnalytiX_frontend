// Codes for Incremental Search
//

export const incrementalSearchRuby = (translate) =>
	`##
 #
 # ${translate('code.1')}
 #
##

def incremental_search(func, x0, delta, nmax = 100)
  @func = Methods::Utils::Commons.format_function(func)
  @x0 = x0
  @delta = delta
  @nmax = nmax

  @iterations = []
  @errors = []

  # ${translate('code.2')}
  initial_validations()

  return { iterations: [], errors: @errors } unless @errors.empty?

  #  ${translate('code.3')}
  f = ->(x) { eval(@func) }
  _Fx0 = f.call(@x0)
  x0 = @x0

  # ${translate('code.4')}
  if _Fx0 == 0
    return { iterations: [], errors: }
  end

  # ${translate('code.5')}
  (1..@nmax).each do |i|
    # ${translate('code.6')}
    x1 = x0 + @delta

    begin
      _Fx1 = f.call(x1)
    rescue
      ap "Error al evaluar f(x1): #{e.message}"
    end

    # ${translate('code.7')}
    if _Fx0 * _Fx1 <= 0
      @iterations << { x0:, x1: }
    end

    # ${translate('code.8')}
    x0 = x1
    _Fx0 = _Fx1
  end

  # ${translate('code.9')}
  if @iterations.empty?
    @errors << 'not_found'
  end

  return { iterations: @iterations, errors: @errors }
end

private

# ${translate('code.10')}
def initial_validations
  # ${translate('code.11')}
  @errors = Methods::Utils::Validations.delta @delta, @errors
  # ${translate('code.12')}
  @errors = Methods::Utils::Validations.max_iterations @nmax, @errors
  # ${translate('code.13')}
  @errors = Methods::Utils::Validations.numeric_value @x0, 'x0', @errors

  return unless @errors.empty?

  # ${translate('code.14')}
  @errors = Methods::Utils::Validations.function @func, nil, { x0: @x0 }, @errors
end`
