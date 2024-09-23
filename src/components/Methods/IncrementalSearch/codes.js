// Codes for Incremental Search
//

export const incrementalSearchRuby = (translate) =>
	`##
 #
 # ${translate('code.1')}
 #
##

def incremental_search(func, x0, delta, n_max = 100)
  # ${translate('code.2')}
  errors = validations(func, x0, delta, n_max)

  return { data: [], errors: } unless errors.empty?

  #  ${translate('code.3')}
  f = ->(x) { eval(func) }
  fx0 = f.call(x0)

  # ${translate('code.4')}
  if fx0 == 0
    return { data: [], errors: }
  end

  data = []

  # ${translate('code.5')}
  (1..n_max).each do |i|
    # ${translate('code.6')}
    x1 = x0 + delta
    begin
      fx1 = f.call(x1)
    rescue
    end

    # ${translate('code.7')}
    if fx0 * fx1 < 0
      data << { x0:, x1: }
    end

    # ${translate('code.8')}
    x0 = x1
    fx0 = fx1
  end

  # ${translate('code.9')}
  if data.empty?
    errors << 'not_found'
  end

  return { data:, errors: }
end

private

# ${translate('code.10')}
def validations func, x0, delta, n_max
  errors = []

  # ${translate('code.11')}
	if delta == 0
    errors << 'delta'
  end

  # ${translate('code.12')}
  if n_max <= 0
    errors << 'n_max'
  end

  # ${translate('code.13')}
	begin
    f = ->(x) { eval(func) }
  rescue
    errors << 'function_eval'
  end

  errors
end`
